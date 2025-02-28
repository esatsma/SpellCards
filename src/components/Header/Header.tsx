import React from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HeaderBackButton from "@/components/Header/HeaderBackButton/HeaderBackButton";
import { Heading } from "@/components/ui/heading";

export type HeaderProps = {
  title: string;
  subtitle?: string;
  canGoBack?: boolean;
  onPressBack: VoidFunction;
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#06402B",
    flexDirection: "row",
    gap: 8,
    paddingBottom: 12,
    paddingHorizontal: 16,
    position: "relative",
  },
  rightPadding: {
    marginRight: 40,
  },
  text: {
    color: "#FFFFFF",
    textAlign: "center",
    width: "100%",
  },
  titleContainer: {
    alignItems: "center",
    flex: 1,
    minHeight: 32,
  },
});

const Header = ({ title, canGoBack, onPressBack }: HeaderProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top + 12 }]}>
      {canGoBack && <HeaderBackButton onPress={onPressBack} />}
      <View style={[styles.titleContainer]}>
        <Heading
          size="xl"
          style={styles.text}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {title}
        </Heading>
      </View>
    </View>
  );
};

export default Header;

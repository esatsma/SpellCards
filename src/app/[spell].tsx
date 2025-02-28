import { ScrollView, StyleSheet, View } from "react-native";

import useSpell from "@/hooks/queries/useSpell";
import React, { useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import useStatusBarStyle from "@/hooks/useStatusBarStyle/useStatusBarStyle";
import { HStack } from "@/components/ui/hstack";
import { FontAwesome6 } from "@expo/vector-icons";
import useDynamicHeaderStore from "@/store/dynamicHeaderStore/dynamicHeaderStore";
import { formatSpellLevel } from "@/helpers/formatSpellLevel/formatSpellLevel";
import SpellMetaData from "@/components/SpellMetaData/SpellMetaData";

export default function Spell() {
  useStatusBarStyle("light");
  const { spell } = useLocalSearchParams<{ spell: string }>();
  const { setDynamicHeaderTitle } = useDynamicHeaderStore();

  const { data } = useSpell(spell);

  useEffect(() => {
    if (!data) {
      return;
    }

    setDynamicHeaderTitle(data.name);
  }, [data, setDynamicHeaderTitle]);

  return (
    <ScrollView style={styles.container}>
      {data && (
        <>
          <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>
              {formatSpellLevel(data?.level)} {data?.school.name}{" "}
              {data.level === 0 ? "Cantrip" : ""}
            </Text>
          </View>

          <SpellMetaData spell={data} />

          {data?.desc.map((paragraph, index) => (
            <Text key={index} style={styles.description}>
              {paragraph}
            </Text>
          ))}
          <Text>{data.higher_level}</Text>
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  subTitleContainer: {
    borderTopWidth: 1,
    borderColor: "#FFF",
    paddingTop: 8,
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#06402B",
  },
  subTitle: {
    fontSize: 16,
    color: "#FFF",
  },
  metaDataContainer: {
    padding: 8,
    justifyContent: "flex-start",
    textAlign: "left",
    backgroundColor: "#06402B",
  },
  metaDataItem: {
    flex: 1,
  },
  metaData: {
    color: "#FFF",
  },
  description: {
    fontSize: 16,
    marginBottom: 8,
    padding: 12,
  },
});

import { HStack } from "@/components/ui/hstack";
import { StyleSheet, View } from "react-native";

import { FontAwesome6 } from "@expo/vector-icons";
import React from "react";
import { SpellResponse } from "@/service/api/requests/spellRequest";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

type MetaDataProps = {
  spell: SpellResponse;
};
const SpellMetaData = ({ spell }: MetaDataProps) => {
  return (
    <>
      <HStack space={"lg"} style={styles.metaDataContainer}>
        <View style={styles.metaDataItem}>
          <Heading style={styles.metaData}>Casting Time</Heading>
          <Text style={styles.metaData}>{spell.casting_time}</Text>
        </View>
        <View style={styles.metaDataItem}>
          <Heading style={styles.metaData}>Range</Heading>
          <Text style={styles.metaData}>{spell.range}</Text>
        </View>
      </HStack>
      <HStack
        space={"lg"}
        style={[styles.metaDataContainer, { marginBottom: 8 }]}
      >
        <View style={styles.metaDataItem}>
          <Heading style={styles.metaData}>Components</Heading>
          <Text style={styles.metaData}>{spell.components.join(", ")}</Text>
        </View>
        <View style={styles.metaDataItem}>
          <Heading style={styles.metaData}>Duration</Heading>
          <Text style={styles.metaData}>
            {spell.duration}{" "}
            {spell.concentration && (
              <FontAwesome6 name={"copyright"} size={20} />
            )}
          </Text>
        </View>
      </HStack>
    </>
  );
};

export default SpellMetaData;

const styles = StyleSheet.create({
  metaDataContainer: {
    paddingVertical: 8,
    paddingHorizontal: 12,
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
});

import React from "react";
import { Spell } from "@/types/spellService.type";
import { Pressable, StyleSheet, View } from "react-native";
import { Link } from "expo-router";
import { Heading } from "@/components/ui/heading";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import SpellBookButton from "@/components/SpellBookButton/SpellBookButton";
import { useState } from "react";

export const SpellCard = (spell: Spell) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Link
      href={{
        pathname: "/[spell]",
        params: { spell: spell.index },
      }}
      style={[styles.card, isPressed && styles.pressedCard]}
      asChild
    >
      <Pressable
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
      >
        <Card size="md" variant="elevated" style={styles.cardHeader}>
          <Heading size="xl" style={styles.title} isTruncated>
            {spell.name}
          </Heading>
          <View style={styles.cardContent}>
            <Text size="md">Spell level {spell.level}</Text>
            <SpellBookButton spellId={spell.index} />
          </View>
        </Card>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    borderColor: "#06402B",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    padding: 4,
  },
  pressedCard: {
    opacity: 0.5,
  },
  cardHeader: {
    flex: 1,
    overflow: 'hidden',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
    paddingHorizontal: 4,
  },
  cardContent: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  title: {
    color: "#06402B",
  },
});

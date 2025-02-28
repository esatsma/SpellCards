import * as Haptics from "expo-haptics";
import React from "react";
import { Pressable } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useSpellBookStore } from "@/store/spellBookStore/spellBookStore";

export type SpellBookButtonProps = {
  spellId: string;
};

const SpellBookButton = ({ spellId }: SpellBookButtonProps) => {
  const { spells, toggleSpell } = useSpellBookStore();

  const isInSpellBook = spells.includes(spellId);

  return (
    <Pressable
      accessibilityHint={
        isInSpellBook ? "Remove from Spellbook" : "Add to Spellbook"
      }
      hitSlop={24}
      onPress={() => {
        toggleSpell(spellId);
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      }}
    >
      {isInSpellBook ? (
        <Ionicons size={28} name="book" color={"#06402B"} />
      ) : (
        <Ionicons size={28} name="book-outline" color={"#06402B"} />
      )}
    </Pressable>
  );
};

export default SpellBookButton;

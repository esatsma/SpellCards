import React from "react";
import { FlatList, View } from "react-native";
import { SpellCard } from "@/components/SpellCard/Spellcard";
import { Spell } from "@/types/spellService.type";

type SpellListProps = {
  spells: Spell[];
};

const SpellList = ({ spells }: SpellListProps) => {
  return (
    <FlatList
      data={spells}
      renderItem={({ item }) => <SpellCard {...item} />}
    />
  );
};

export default SpellList;

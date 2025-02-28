import React from "react";
import { SafeAreaView } from "react-native";
import useStatusBarStyle from "@/hooks/useStatusBarStyle/useStatusBarStyle";
import SpellList from "@/components/SpellList/SpellList";
import useSpells from "@/hooks/queries/useSpells";

export default function Index() {
  useStatusBarStyle("light");
  const { data } = useSpells();

  if (!data?.results) {
    return;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SpellList spells={data?.results} />
    </SafeAreaView>
  );
}

import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import useStatusBarStyle from "@/hooks/useStatusBarStyle/useStatusBarStyle";
import SpellList from "@/components/SpellList/SpellList";
import useSpells from "@/hooks/queries/useSpells";
import SearchButton from "@/components/SearchButton/SearchButton";
import FilterSheet from "@/components/FilterSheet/FilterSheet";

export default function Index() {
  useStatusBarStyle("light");
  const { data } = useSpells();
  const [openFilterSheet, setOpenFilterSheet] = useState(false);

  if (!data?.results) {
    return;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SpellList spells={data?.results} />
      <SearchButton onPress={() => setOpenFilterSheet(true)} />
      {openFilterSheet && <FilterSheet />}
    </SafeAreaView>
  );
}

import React, { useState } from "react";
import { SafeAreaView, View } from "react-native";
import useStatusBarStyle from "@/hooks/useStatusBarStyle/useStatusBarStyle";
import SpellList from "@/components/SpellList/SpellList";
import useSpells from "@/hooks/queries/useSpells";
import SearchButton from "@/components/SearchButton/SearchButton";
import FilterSheet from "@/components/FilterSheet/FilterSheet";
import BottomSheetModalContainer from "@/components/BottomSheetModal/BottomSheetModal";
import useBottomSheet from "@/hooks/useBottomSheet/useBottomSheet";

export default function Index() {
  useStatusBarStyle("light");
  const { data } = useSpells();
  const { bottomSheetRef, content, openModal } = useBottomSheet();

  if (!data?.results) {
    return;
  }

  return (
    <View style={{ flex: 1 }}>
      <SpellList spells={data?.results} />
      <SearchButton onPress={() => openModal(<FilterSheet />)} />
      <BottomSheetModalContainer ref={bottomSheetRef} content={content} />
    </View>
  );
}

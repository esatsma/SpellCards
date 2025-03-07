import React from "react";
import { StyleSheet } from "react-native";
import { BottomSheetView } from "@gorhom/bottom-sheet";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BottomSheetModalInstance } from "@/components/BottomSheetModal/content/BottomSheetInstance";
import { Heading } from "@/components/ui/heading";
import InputSelect from "@/components/InputSelect/InputSelect";
import { dndClasses } from "@/types/dndClasses.type";

const FilterSheet = (): BottomSheetModalInstance => {
  const insets = useSafeAreaInsets();

  return (
    <BottomSheetView
      style={[styles.container, { paddingBottom: insets.bottom }]}
    >
      <Heading size={"xl"} style={styles.sheetHeader}>
        Filter by
      </Heading>
      <Heading size={"sm"}>Class</Heading>
      <InputSelect
        options={dndClasses}
        placeholder={"Select a class"}
        onSelect={(selectedOption) => {
          console.log(selectedOption);
        }}
      />
    </BottomSheetView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "#EEE",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  sheetHeader: {
    textAlign: "center",
  },
});

export default FilterSheet;

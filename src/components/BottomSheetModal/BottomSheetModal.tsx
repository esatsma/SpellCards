import { BottomSheetBackdrop, BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { forwardRef, useCallback } from "react";

import { useBottomSheetStore } from "@/store/bottomSheetStore/bottomSheetStore";

import { BottomSheetModalInstance } from "./content/BottomSheetInstance";

type Props = {
  content: BottomSheetModalInstance;
};

const BottomSheetModalContainer = forwardRef<BottomSheetModal, Props>(
  ({ content }, ref) => {
    const { setBottomSheetContent } = useBottomSheetStore();

    const renderBackDrop = useCallback(
      (props: any) => (
        <BottomSheetBackdrop
          appearsOnIndex={0}
          disappearsOnIndex={-1}
          {...props}
          opacity={0.5}
        />
      ),
      [],
    );

    return (
      <BottomSheetModal
        ref={ref}
        enablePanDownToClose
        enableDismissOnClose
        onDismiss={() => setBottomSheetContent(null)}
        backdropComponent={renderBackDrop}
        keyboardBehavior="interactive"
        keyboardBlurBehavior="restore"
        handleIndicatorStyle={{ backgroundColor: "#06402B" }}
        android_keyboardInputMode="adjustResize"
      >
        {content}
      </BottomSheetModal>
    );
  },
);

export default BottomSheetModalContainer;

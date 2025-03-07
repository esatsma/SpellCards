import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useCallback, useRef } from "react";

import { BottomSheetModalInstance } from "@/components/BottomSheetModal/content/BottomSheetInstance";
import { useBottomSheetStore } from "@/store/bottomSheetStore/bottomSheetStore";

const useBottomSheet = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const { content, setBottomSheetContent: setContent } = useBottomSheetStore();

  const presentModal = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);

  const closeModal = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  const openModal = useCallback(
    (newContent: BottomSheetModalInstance) => {
      setContent(newContent);
      presentModal();
    },
    [presentModal, setContent],
  );

  return {
    bottomSheetRef,
    content,
    setContent,
    openModal,
    presentModal,
    closeModal,
  };
};

export default useBottomSheet;

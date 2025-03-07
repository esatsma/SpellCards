import { create } from "zustand";

import { BottomSheetModalInstance } from "@/components/BottomSheetModal/content/BottomSheetInstance";

export interface IBottomSheet {
  content: BottomSheetModalInstance;
  setBottomSheetContent: (content: BottomSheetModalInstance) => void;
}

export const useBottomSheetStore = create<IBottomSheet>((set) => ({
  setBottomSheetContent: (content) => set({ content }),
  content: null,
}));

import { create } from "zustand";

type HeaderState = {
  dynamicHeaderTitle: string;
};

type HeaderActions = {
  setDynamicHeaderTitle: (title: string) => void;
  clearDynamicHeaderTitle: VoidFunction;
};

const useDynamicHeaderStore = create<HeaderState & HeaderActions>((set) => ({
  dynamicHeaderTitle: " ",

  setDynamicHeaderTitle: (content) => set({ dynamicHeaderTitle: content }),

  clearDynamicHeaderTitle: () => set({ dynamicHeaderTitle: " " }),
}));

export default useDynamicHeaderStore;

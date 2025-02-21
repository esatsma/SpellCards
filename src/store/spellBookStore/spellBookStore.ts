import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import AsyncStorage from "@react-native-async-storage/async-storage";
import {PersistedStore} from "@/store/types";
import partializePersistedStore from "@/store/helpers/partializePersistedStore";

type SpellId = string

type SpellBookStore = {
  spells: SpellId[]
  toggleSpell: (spell: SpellId) => void
  setSpellBook: (newState: Array<SpellId>) => void
  clearSpellBook: VoidFunction
}

export const useSpellBookStore = create<PersistedStore & SpellBookStore>()(
    persist(
        (set) => ({
            _hasHydrated: false,
            _setHasHydrated: (value: boolean) => set({ _hasHydrated: value }),

            spells: [],
            toggleSpell: (spellId: SpellId) =>
                set((state) => {
                    const isInSpellBook = state.spells.includes(spellId)

                    return {
                        spells: isInSpellBook
                            ? state.spells.filter((spellBookSpells) => spellBookSpells !== spellId)
                            : [...state.spells, spellId]
                    }
                }),
            setSpellBook: (newState) => set({ spells: newState }),
            clearSpellBook: () => set({ spells: [] })
        }),
        {
            name: 'spellbook-store',
            storage: createJSONStorage(() => AsyncStorage),
            onRehydrateStorage: () => (state) => state?._setHasHydrated(true),
            partialize: partializePersistedStore<SpellBookStore>()
        })
)

export const useIsStoreHydrated = () => useSpellBookStore((state) => state._hasHydrated)
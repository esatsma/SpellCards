import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type SpellId = string

type SpellBookStore = {
  spells: SpellId[]
  toggleSpell: (spell: SpellId) => void
  setSpellBook: (newState: Array<SpellId>) => void
  clearSpellBook: VoidFunction
}

export const useSpellBookStore = create<SpellBookStore>()(
    (set) => ({
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
    })
)

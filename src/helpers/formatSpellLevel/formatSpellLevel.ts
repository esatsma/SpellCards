export const formatSpellLevel = (spellLevel?: number) => {
  if (!spellLevel || spellLevel === 0) {
    return "";
  }

  if (spellLevel === 1) {
    return "1st-level";
  }

  if (spellLevel === 2) {
    return "2nd-level";
  }

  if (spellLevel === 3) {
    return "3rd-level";
  }

  if (spellLevel > 3) {
    return `${spellLevel}th-level`;
  }
};

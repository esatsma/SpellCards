export type PersistedStore = {
  _hasHydrated: boolean;
  _setHasHydrated: (value: boolean) => void;
};

export type StoreWithPersistence<T> = T & PersistedStore;

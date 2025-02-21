import { StoreWithPersistence } from '../types'

const partializePersistedStore = <T>() => {
  return (state: StoreWithPersistence<T>) => {
    const excludedKeys = ['_hasHydrated', '_setHasHydrated']
    const allowed = Object.fromEntries(
      Object.entries(state).filter(([key]) => !excludedKeys.includes(key))
    )

    return allowed as Omit<StoreWithPersistence<T>, '_hasHydrated' | '_setHasHydrated'>
  }
}

export default partializePersistedStore

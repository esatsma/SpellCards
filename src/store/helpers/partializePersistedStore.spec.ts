import partializePersistedStore from './partializePersistedStore'

describe('partializePersistedStore', () => {
  it('should return a partial of the store with the `_hasHydrated` and `_setHasHydrated` keys removed', () => {
    const store = {
      _hasHydrated: true,
      _setHasHydrated: () => null,
      actualData: 'foo'
    }

    const result = partializePersistedStore<typeof store>()(store)

    expect(result).toEqual({
      actualData: 'foo'
    })
  })
})

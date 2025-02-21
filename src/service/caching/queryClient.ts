import { QueryClient } from '@tanstack/react-query'

/**
 * These are the default settings for all queries. They can be manually overridden per useQuery.
 */
const queryDefaults = {
  STALE_TIME: Infinity,
  GC_TIME: Infinity,
  RETRY_AMOUNT: 1
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: queryDefaults.STALE_TIME,
      gcTime: queryDefaults.GC_TIME,
      retry: queryDefaults.RETRY_AMOUNT
    }
  }
})

export default queryClient

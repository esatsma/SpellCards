import ApiError from './ApiError'
import { apiCall } from './apiCall'

describe('apiCall', () => {
  const mockFetch = jest.spyOn(global, 'fetch')

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should return a FulfilledResponse on successful API call', async () => {
    const mockResponse = { status: 200, ok: true, json: () => Promise.resolve({ data: 'success' }) }

    mockFetch.mockResolvedValueOnce(mockResponse as Response)

    const result = await apiCall<{ data: string }, never>({
      method: 'GET',
      endpoint: '/test',
      url: 'https://example.com'
    })

    expect(result).toBeInstanceOf(Object)
    expect(result).toHaveProperty('data')
    expect(result).toHaveProperty('response')
    expect(result).not.toHaveProperty('error')
    expect(result.data).toEqual({ data: 'success' })
  })

  it('should return an ErrorResponse on API call failure', async () => {
    const mockResponse = {
      status: 404,
      ok: false,
      json: () => Promise.resolve({ error: 'Not Found' })
    }

    mockFetch.mockResolvedValueOnce(mockResponse as Response)

    const result = await apiCall<never, { error: string }>({
      method: 'GET',
      endpoint: '/test',
      url: 'https://example.com'
    })

    expect(result).toBeInstanceOf(Object)
    expect(result).toHaveProperty('error')
    expect(result).toHaveProperty('response')
    expect(result.data).toBeUndefined()
    expect(result.error).toBeInstanceOf(ApiError)
    expect(result.error?.message).toContain('request failed with status code 404')
    expect(result.error?.data).toEqual({ error: 'Not Found' })
  })

  it('should return an ErrorResponse when fetch Promise is rejected', async () => {
    const mockError = new Error('Network Error')

    mockFetch.mockRejectedValueOnce(mockError)

    const result = await apiCall<never, { error: string }>({
      method: 'GET',
      endpoint: '/test',
      url: 'https://example.com'
    })

    expect(result).toBeInstanceOf(Object)
    expect(result).toHaveProperty('error')
    expect(result.data).toBeUndefined()
    expect(result).not.toHaveProperty('response')
    expect(result.error).toBeInstanceOf(ApiError)
    expect(result.error?.message).toBe(mockError.message)
  })

  it('should return an ErrorResponse on JSON parsing failure', async () => {
    const mockResponse = {
      status: 200,
      ok: true,
      json: () => Promise.reject(new Error('Invalid JSON'))
    }

    mockFetch.mockResolvedValueOnce(mockResponse as unknown as Response)

    const result = await apiCall<never, { error: string }>({
      method: 'GET',
      endpoint: '/test',
      url: 'https://example.com'
    })

    expect(result).toBeInstanceOf(Object)
    expect(result).toHaveProperty('error')
    expect(result).toHaveProperty('response')
    expect(result.data).toBeUndefined()
    expect(result.error).toBeInstanceOf(ApiError)
    expect(result.error?.message).toContain('Invalid JSON')
  })
})

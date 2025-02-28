import ApiError from "./ApiError";

export type FulfilledResponse<T> = {
  data: T;
  error: undefined;
  response: Response;
};

export type ErrorResponse<E> = {
  data: undefined;
  error: ApiError<E>;
  response?: Response;
};

export type ApiResponse<T, E> = ErrorResponse<E> | FulfilledResponse<T>;

type Headers = {
  [name: string]: string;
};

export type ApiRequest = {
  method: "GET" | "POST" | "PUT" | "DELETE";
  endpoint: string;
  url: string;
  headers?: Headers;
};

const getRequestHeaders = (headers: Headers) => {
  const baseHeaders = {
    accept: "application/json",
  };

  return {
    ...baseHeaders,
    ...headers,
  };
};

export const apiCall = async <Response, E = unknown>({
  method,
  endpoint,
  url,
  headers = {},
}: ApiRequest): Promise<ApiResponse<Response, E>> => {
  const requestHeaders = getRequestHeaders(headers);

  const promise = fetch(url + endpoint, {
    method,
    headers: requestHeaders,
  });

  const [result] = await Promise.allSettled([promise]);

  if (result.status !== "fulfilled") {
    return {
      error: ApiError.fromError(result.reason as Error),
      data: undefined,
    } as ErrorResponse<E>;
  }

  const response = result.value;

  let responseBody;

  try {
    responseBody = await response.json();
  } catch (error: unknown) {
    return {
      data: undefined,
      error: ApiError.fromError(error as Error),
      response,
    } as ErrorResponse<E>;
  }

  if (!response.ok) {
    return {
      data: undefined,
      error: new ApiError(
        `request failed with status code ${response.status}`,
        await Promise.resolve(responseBody),
      ),
      response,
    } as ErrorResponse<E>;
  }

  return {
    data: await responseBody,
    response,
  } as FulfilledResponse<Response>;
};

export default apiCall;

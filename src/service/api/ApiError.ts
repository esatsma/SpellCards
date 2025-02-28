class ApiError<E = unknown> extends Error {
  public data?: E;

  constructor(message?: string, data?: E) {
    super(message);
    this.name = "ApiError";
    this.data = data;
  }

  static fromError(error: Error) {
    return new ApiError(error.message);
  }
}

export default ApiError;

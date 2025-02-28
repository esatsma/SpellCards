import ApiError from "./ApiError";

describe("ApiError", () => {
  it("should create an instance of ApiError", () => {
    const error = new ApiError("Something went wrong");

    expect(error).toBeInstanceOf(ApiError);
    expect(error.message).toBe("Something went wrong");
    expect(error.name).toBe("ApiError");
    expect(error.data).toBeUndefined();
  });

  it("should create an ApiError with data", () => {
    const data = { errorCode: 404, message: "Not Found" };
    const error = new ApiError("Not Found", data);

    expect(error.data).toEqual(data);
  });

  it("should create an ApiError from another Error", () => {
    const originalError = new Error("Something went wrong");
    const apiError = ApiError.fromError(originalError);

    expect(apiError).toBeInstanceOf(ApiError);
    expect(apiError.message).toBe("Something went wrong");
    expect(apiError.name).toBe("ApiError");
    expect(apiError.data).toBeUndefined();
  });
});

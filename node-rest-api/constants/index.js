module.exports = {
  defaultServerResponse: {
    status: 400,
    message: "",
    body: {},
  },
  productMessage: {
    PRODUCT_CREATED: "Product Created Successfully!",
    PRODUCT_FETCHED: "Product Fetched Susccessfully!",
    PRODUCT_UPDATED: "Product Updated Successfully!",
    PRODUCT_DETELED: "Product Deleted Successfully!",
    PRODUCT_NOT_FOUND: "Product not found.",
  },
  userMessage: {
    SIGNUP_SUCCESS: "Signup Success",
    LOGIN_SUCCESS: "Login Success",
    DUPLICATE_EMAIL: "User already exists with given email",
    USER_NOT_FOUND: "User not found",
    INVALID_PASSWORD: "Incorrect Password",
  },
  requestValidationMessage: {
    BAD_REQUEST: "Invalid fields",
  },
  databaseMesssage: {
    INVALID_ID: "Invalid Id",
  },
};

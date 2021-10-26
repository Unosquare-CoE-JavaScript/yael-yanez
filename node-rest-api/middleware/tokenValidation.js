const constants = require("../constants");
const jwt = require("jsonwebtoken");

module.exports.validateToken = (req, res, next) => {
  const response = { ...constants.defaultServerResponse };

  try {
    if (!req.headers.authorization) {
      throw new Error(constants.requestValidationMessage.TOKEN_MISSING);
    }

    const token = req.headers.authorization.split("Bearer")[1].trim();
    const decoded = jwt.verify(
      token,
      process.env.SECRET_KEY || "my-secret-key"
    );

    return next();
  } catch (error) {
    response.status = 401;
    response.message = error.message;
  }

  return res.send(response);
};

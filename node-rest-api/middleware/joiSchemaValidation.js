const Joi = require("joi");
const constants = require("../constants");

const validateObjectSchema = (data, schema) => {
  const result = schema.validate(data, { convert: false });

  if (result.error) {
    const errorDetails = result.error.details.map((value) => {
      return {
        error: value.message,
        path: value.path,
      };
    });

    return errorDetails;
  }

  return null;
};

module.exports.validateBody = (schema) => {
  return (req, res, next) => {
    const error = validateObjectSchema(req.body, schema);

    const response = { ...constants.defaultServerResponse };

    if (error) {
      response.body = error;
      response.message = constants.requestValidationMessage.BAD_REQUEST;

      return res.send(response);
    }

    return next();
  };
};

module.exports.validateQueryParams = (schema) => {
  return (req, res, next) => {
    const error = validateObjectSchema(req.query, schema);

    const response = { ...constants.defaultServerResponse };

    if (error) {
      response.body = error;
      response.message = constants.requestValidationMessage.BAD_REQUEST;

      return res.send(response);
    }

    return next();
  };
};

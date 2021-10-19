const constants = require("../constants");
const userService = require("../service/userService");

module.exports.signup = async (req, res) => {
  const response = { ...constants.defaultServerResponse };

  try {
    const responseFromService = await userService.signup(req.body);

    response.status = 200;
    response.message = constants.userMessage.SIGNUP_SUCCESS;
    response.body = responseFromService;
  } catch (error) {
    response.message = error.message;
  }

  return res.send(response);
};

module.exports.login = async (req, res) => {
  const response = { ...constants.defaultServerResponse };

  try {
    const responseFromService = await userService.login(req.body);

    response.status = 200;
    response.message = constants.userMessage.LOGIN_SUCCESS;
    response.body = responseFromService;
  } catch (error) {
    response.message = error.message;
  }

  return res.send(response);
};

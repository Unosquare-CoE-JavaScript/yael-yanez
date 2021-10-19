const mongoose = require("mongoose");
const constants = require("../constants");

module.exports.formatMongoData = (data) => {
  if (Array.isArray(data)) {
    const newDataList = data.map((value) => value.toObject());
    return newDataList;
  }

  return data.toObject();
};

module.exports.checkObjectId = (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error(constants.databaseMesssage.INVALID_ID);
  }
};

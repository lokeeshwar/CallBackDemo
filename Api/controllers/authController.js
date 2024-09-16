const RegisterLog = require("../models/logModel");

const logData = async (req, res, next) => {
  const registerLog = new RegisterLog({
    registerLog: `New log has been created`,
  });

  try {
    await registerLog.save();

    res.status(201).json({ message: "Log created successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = { logData };

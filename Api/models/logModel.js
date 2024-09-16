const mongoose = require('mongoose');

const registerLogSchema = new mongoose.Schema(
  {
    registerLog: {
      type: String,
      required: true
    }
  },
  { timestamps: true } 
);

const RegisterLog = mongoose.model('RegisterLog', registerLogSchema);

module.exports = RegisterLog;
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    membership: { type: Boolean, default: false, required: true },
    admin: { type: Boolean, default: false, required: true },
  },
);

module.exports = mongoose.model('User', User);

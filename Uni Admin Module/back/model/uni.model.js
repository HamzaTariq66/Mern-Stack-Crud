const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const uniSchema = new Schema(
  {
    uni_name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3
    },
    description: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3
    },
    address: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3
    }
  },
  {
    timestamps: true
  }
);

const Uni = mongoose.model("University", uniSchema);

module.exports = Uni;

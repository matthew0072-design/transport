const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Schema } = mongoose;

const userSchema = new Schema({
  Surname: {
    type: String,
    required: [true, "Your Surname is required!!!"],
  },

  otherNames: {
    type: String,
    required: [true, "Other names required"],
  },

  gender: {
    type: String,
    default: "Male",
  },

  phone: {
    type: String,
    maxLength: 15,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
    minLength: 6,
  },
  confirmedPassword: {
    type: String,
    trim: true,
    minLength: 6,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, "neverfearchallenge");
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  delete userObject.confirmedPassword;
  delete userObject.tokens;
  return userObject;
};

userSchema.statics.findByCredentials = async function (email, password) {
  const user = await this.findOne({ email });

  if (!user) {
    throw new Error("Unable to login");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("unable to login");
  }

  return user;
};

userSchema.pre("save", async function (next) {
  const user = this;

  if (user.isModified("password && confirmedPassword ")) {
    user.password = await bcrypt.hash(user.password, 10);
    user.confirmedPassword = user.password;
  }

  next();
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;

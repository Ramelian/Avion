import { mongoose } from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  secondName: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: String,
  },
  phone: {
    type: String,
    trim: true,
  },
  dateOfBirth: Date,
  gender: {
    type: String,
    enum: ["male", "female", "other"],
  },
  orderHistory: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: Date,
});

userSchema.statics.signup = async function (
  email,
  password,
  firstName,
  secondName,
  address,
  phone,
  dateOfBirth,
  gender
) {
  if (!email || !password) {
    throw "All fields must be filled";
  }

  const exist = await this.findOne({ email });
  if (exist) {
    throw "This user already exists";
  }

  if (!validator.isEmail(email)) {
    throw "Not appropriate Email";
  }

  if (!validator.isStrongPassword(password)) {
    throw "Not strong password";
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({
    email,
    password: hash,
    firstName,
    secondName,
    address,
    phone,
    dateOfBirth,
    gender,
  });
  return user;
};

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw "All fields must be filled";
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw "User with this email doesn't exist";
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw "Incorrect password";
  }

  return user;
};

const User = mongoose.model("User", userSchema);

export default User;

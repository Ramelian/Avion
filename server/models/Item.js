import mongoose from "mongoose";

const itemSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    width: {
      type: Number,
      required: true,
    },
    depth: {
      type: Number,
      required: true,
    },
    picturePath: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true, // Enables the timestamps option
  }
);

const Item = mongoose.model("Item", itemSchema);

export default Item;

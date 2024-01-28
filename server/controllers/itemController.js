import Item from "../models/Item.js";

export const setItem = async (req, res) => {
  try {
    const {
      name,
      price,
      description,
      height,
      width,
      depth,
      picturePath,
      type,
    } = req.body;
    const newItem = new Item({
      name,
      price,
      description,
      height,
      width,
      depth,
      picturePath,
      type,
    });

    await newItem.save();
    const item = await Item.find({ name });
    res.status(201).json(item);
  } catch (err) {
    console.log(err);
    res.status(409).json({ msg: "Unable to create Item" });
  }
};

export const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    return res.status(200).json(items);
  } catch (err) {
    return res.status(400).json({ msg: "Unable to get items" });
  }
};

export const getItem = async (req, res) => {
  try {
    const id = req.params.id;
    const item = await Item.find({_id: id});
    return res.status(200).json(item);
  } catch (err) {
    return res.status(400).json({ msg: "Unable to retrieve product"})
  }
}

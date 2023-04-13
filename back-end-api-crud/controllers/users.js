import userModel from "../models/users.js";

// /user hit
export const home = (req, res) => {
  res.status(200).send("You have reached the endpoint /users !!");
};

// controller for creating new user in the database
export const createUser = async (req, res) => {
  const newUser = new userModel({
    name: req.body.name,
    title: req.body.title,
    bio: req.body.bio,
  });

  try {
    const creatingUser = await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
};

// controller for fetching all users from the database
export const listAll = async (req, res) => {
  try {
    const query = await userModel.find();
    if (query) {
      res.status(200).json(query);
    } else {
      res.status(400).json({msg : "No user here !"});
    }
  } catch (err) {
    res.status(400).json({ msg: err });
  }
};

// controller for fetching a particular user from the database
export const getUser = async (req, res) => {
  try {
    const query = await userModel.findById(req.params.id);
    if (!query) {
      res.status(400).json({ msg: "Invalid user request !!" });
    } else {
      res.status(200).json(query);
    }
  } catch (err) {
    res.status(400).json({ msg: err });
  }
};

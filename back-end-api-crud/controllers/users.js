import userModel from '../models/users.js';

export const index = (req,res) => {
    res.send('users Index');
}

export const listAll = (req, res) => {
  res.send("List of all users");
};


// controller for creating new user in the database
export const createUser = async (req,res)=> {
  const newUser = new userModel({
    name : req.body.name,
    title : req.body.title,
    bio : req.body.bio,
  })

  try{
    const creatingUser = await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({msg : err})
  }
};
// import userModel from '../models/users';

export const index = (req,res) => {
    res.send('users Index');
}

export const listAll = (req, res) => {
  res.send("List of all users");
};

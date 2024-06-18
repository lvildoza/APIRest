import User from '../models/usersModel.js';

// GET USER

const getUser = async (req, res, next) => {
    try {
        const user = await User.find({});
        res.status(200).json(user);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

// GET USER BY ID
const getUserByID = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findById(id);
        if(!user){
            return res.status(400).json({message: `cannot find any user by with ID ${id}`})
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send({message: error.message});
    }
}

// POST USER
const postUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(200).json(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
};

// UPDATE USER BY ID
const putUser = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findByIdAndUpdate(id, req.body);
        // we cannot find any user in database
        if(!user){
            return res.status(404).json({message: `cannot find any user by with ID ${id}`})
        }
        const updateUser = await User.findById(id);
        res.status(200).json(updateUser);

    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

// DELETE USER
const deleteUser = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id);
        if(!user){
            return res.status(404).json({message: `cannot find any user with ID ${id}`})
        }
        res.status(200).json(user);

    } catch (error) {
        res.status(500).json({message: error.message});        
    }
};

export default {
    getUser,
    getUserByID,
    postUser,
    putUser,
    deleteUser
}
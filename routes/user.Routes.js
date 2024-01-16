const express = require ('express');
const userController = require ('../controllers/userController');
const router = express.Router();

const {getUser, getUserByID, postUser, putUser, deleteUser} = userController;

router.get('/users', getUser);
router.get('/user/:id', getUserByID);
router.post('/user/register', postUser);
router.put('/user/update/:id', putUser);
router.delete('/user/delete/:id', deleteUser)

module.exports = {
    routes: router
}


const express =require('express');
const app = express();
const data = require("../data/users")

app.use(express.json());

const index = (req, res) => {
    const users = data.findAll();
    res.status(200).json(users);
}

const create = (req, res) => {
    const { name, email } = req.body;
    const newUser = data.add({
        name,
        email
    });
    res.status(201).json(newUser);
};

const update = (req, res) => {
    const { id } = req.params;
    const updateInfo = req.body;
    const updateUser = data.updateById(id, updateInfo);
    if (!updateUser) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(updateUser);
}

const deleteById = (req, res) => {
    const { id } = req.params;
    const deleteUser = data.deleteById(id);
    if (!deleteUser) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User successfully deleted' });
}

module.exports ={
    index,
    create,
    update,
    deleteById
}
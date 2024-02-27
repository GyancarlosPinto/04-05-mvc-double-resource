const express =require('express');
const app = express();
const data = require("../data/todos")

app.use(express.json());

const index = (req, res) => {
    const todos = data.findAll();
    res.status(200).json(todos);
}

const create = (req, res) => {
    const { title, completed, userId } = req.body;
    const newToDo = data.add({
        title,
        completed,
        userId
    });
    res.status(201).json(newToDo);
};

const update = (req, res) => {
    const { id } = req.params;
    const updateInfo = req.body;
    const updateTodo = data.updateById(id, updateInfo);
    if (!updateTodo) {
        return res.status(404).json({ message: 'Todo not found' });
    }
    res.status(200).json(updateTodo);
}

const deleteById = (req, res) => {
    const { id } = req.params;
    const deleteTodo = data.deleteById(id);
    if (!deleteTodo) {
        return res.status(404).json({ message: 'Todo not found' });
    }
    res.status(200).json({ message: 'Todo successfully deleted' });
}

module.exports ={
    index,
    create,
    update,
    deleteById
}
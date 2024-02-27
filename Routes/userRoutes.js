const express = require('express');
const userRouter = express.Router();
const userController = require('..//Controllers/userController');

userRouter.get("/", userController.index);

userRouter.post("/", userController.create);

userRouter.put("/:id", userController.update);

userRouter.delete("/:id", userController.deleteById);

module.exports = userRouter;
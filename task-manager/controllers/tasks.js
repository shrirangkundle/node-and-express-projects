const tasks = require("../models/tasks");
const getAllTasks = (req, res) => {
  res.send("all items");
};

const createTask = (req, res) => {
  res.json(req.body);
};
const getTask = (req, res) => {
  res.json({ id: req.params.id });
};
const updateTask = (req, res) => {
  res.send("update tesk");
};
const deleteTask = (req, res) => {
  res.send("delete tesk");
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};

const tasks = require("../models/tasks");

//middleware
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/customError");

const getAllTasks = asyncWrapper(async (req, res) => {
  const task = await tasks.find({});
  res.status(200).json({ task });
  //here you can pass anything ! yuo dont have to necesserly send tasks
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await tasks.create(req.body);
  res.status(201).json({ task });
});

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await tasks.findOne({ _id: taskID });

  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404));
    // return res.status(404).json({ msg: `No task with id : ${taskID}` });
  }
  res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await tasks.findOneAndDelete({ _id: taskID });

  if (!task) {
    // return res.status(404).json({ msg: `No task with id : ${taskID}` });
    return next(createCustomError(`No task with id : ${taskID}`, 404));
  }
  res.status(200).json({ msg: "task deleted successfully" });
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await tasks.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    // return res.status(404).json({ msg: `No task with id : ${taskID}` });
    return next(createCustomError(`No task with id : ${taskID}`, 404));
  }
  res.status(200).json({ task });
  // res.status(200).json({ id: taskID, data: req.body });
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};

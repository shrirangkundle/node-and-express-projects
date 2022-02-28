const getAllTasks = (req, res) => {
  res.send("all items");
};

const createTask = (req, res) => {
  res.send("Create tesk");
};
const getTask = (req, res) => {
  res.send("get single tesk");
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

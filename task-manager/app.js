// console.log("task manager setup");

const express = require("express");
const app = express();
const port = 5000;
const tasks = require("./routes/tasks");

//middleware
console.log("git changes");
app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("Task manager app");
});

app.use("/api/v1/tasks", tasks);

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});

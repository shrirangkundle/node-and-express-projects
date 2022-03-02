const mongoose = require("mongoose");

const connectDB = (url) => {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;

//   .then(() => console.log("connected to db"))
//   .catch((err) => console.log(err));

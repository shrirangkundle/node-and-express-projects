const CustomAPIError = require("../errors/custom-error");
const jwt = require("jsonwebtoken");
const login = async (req, res) => {
  const { username, password } = req.body;
  //this is a static project so we are not validating login cred with db ! but in real life scenerio it has to be done
  //there are 3 ways to check : using mongoose validation /Joi/check in the controller
  console.log(username, password);
  if (!username || !password) {
    throw new CustomAPIError("invalid cred", 400);
  }

  const id = new Date().getDate();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  res.status(200).json({ msg: "user created JWT token", token });
};

const dashboard = async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new CustomAPIError("invalid token", 401);
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const luckyNumber = Math.floor(Math.random() * 100);
    res.status(200).json({
      msg: `Hey ${decoded.username}`,
      secret: `Here is your lucky Number ${luckyNumber}`,
    });
  } catch (error) {
    throw new CustomAPIError("token expired", 401);
  }
};

module.exports = { login, dashboard };

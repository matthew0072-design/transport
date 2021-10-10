const jwt = require("jsonwebtoken");
const User = require("../Model/userModel");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, "neverfearchallenge", { _id: User._id });
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });
    req.token = token;
    req.user = user;
    if (!user) {
      throw new Error();
    }
    next();
  } catch (e) {
    console.log("Pls authenticate!!!")
    res.status(401).send("Pls Authenticate!!!");
  }
};

module.exports = auth;

var express = require("express");
var router = express.Router();

const User = require("../src/Model/userModel");
const Auth = require("../src/Middleware/auth");

router.post("/signup", async (req, res, next) => {
  try {
    const user = await new User({
      Surname: req.body.Surname,
      otherNames: req.body.otherNames,
      gender: req.body.gender,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password,
      confirmedPassword: req.body.confirmedPassword,
    }).save();
    const token = await user.generateAuthToken();
    console.log({ user, token });

    res.status(201).send({ user });
  } catch (e) {
    console.log(e);
    res.send(e).status(400);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    console.log(user);
    res.status(200).send({ user });
  } catch (e) {
    console.log(e);
    res.status(404).send(e);
  }
});

router.post("/book", Auth, async (req, res) => {
  try {
    res.send(req.user);
  } catch (e) {
    console.log(e);
  }
});

router.post("/logout", Auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();
    res.status(200).send(`User logout successfully`);
  } catch (e) {
    console.log(e);
    res.status(501).send(e);
  }
});

module.exports = router;

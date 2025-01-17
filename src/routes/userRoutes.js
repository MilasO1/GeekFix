const express = require("express");

const router = express.Router();

// controllers
const {
  createUser,
  removeUser,
  getAllUsers,
  login,
  logout,
} = require("../controllers/userController");

router.post("/create", createUser);
router.delete("/remove/:id", removeUser);
router.get("/", getAllUsers);
router.post("/login", login);
router.post("/logout", logout);

router.get("/", (req, res) => {
  console.log("GET /api/users hit!");
  getAllUsers(req, res);
});

router.post("/create", (req, res, next) => {
  console.log("POST /api/users/create hit!");
  next();
}, createUser);

router.post("/login", (req, res, next) => {
  console.log("POST /api/users/login hit!");
  next();
}, login);

router.post("/logout", (req, res, next) => {
  console.log("POST /api/users/logout hit!");
  next();
}, logout);

router.delete("/remove/:id", (req, res, next) => {
  console.log("POST /api/users/remove/:id hit!");
  next();
}, removeUser);



module.exports = router;
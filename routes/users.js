const controller = require("../controllers/users");
const router = require("express").Router();

// CRUD Routes /users

router.get("/", controller.getUsers); // get users
router.get("/:userId", controller.getUser); //  /user/:userId
router.post("/", controller.createUser); // /users
router.put("/:userId", controller.updateUser); // /users/:userId
router.delete("/:userId", controller.deleteUser); // /users/:userId

module.exports = router;

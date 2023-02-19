const controller = require("../controllers/users");
const routes = require('express').Router();


// CRUD Routes /users

routes.get('./', controller.getUsers); // get users
routes.get("./:userId", controller.getUser); //  /user/:userId
routes.post('/', controller.createUser); // /users
routes.put("/:userId", controller.updateUser); // /users/:userId
routes.delete("/:userId", controller.deleteUser); // /users/:userId


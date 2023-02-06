const Router = require("express");
const authServiceRoutes = require("./authService.routes");
const crudService = require("./crudService.routes");
const matchService = require("./matchService.routes");

const router = Router();

authServiceRoutes(router);
crudService(router);
matchService(router);

module.exports = router;

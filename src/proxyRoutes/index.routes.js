const Router = require("express");
const authServiceRoutes = require("./authService.routes");
const crudService = require("./crudService.routes");
const router = Router();

authServiceRoutes(router);
crudService(router);

module.exports = router;

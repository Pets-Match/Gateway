const httpProxy = require("express-http-proxy");
const auth = httpProxy("http://34.207.221.200:8080");

const authServiceRoutes = (router) => {
  router.get("/auth", (req, res, next) => {
    auth(req, res, next);
  });

  router.post("/auth", (req, res, next) => {
    auth(req, res, next);
  });

  router.get("/auth/middleware", (req, res, next) => {
    auth(req, res, next);
  });

  router.delete("/auth/user", (req, res, next) => {
    auth(req, res, next);
  });

  router.get("/auth/users", (req, res, next) => {
    auth(req, res, next);
  });
};

module.exports = authServiceRoutes;

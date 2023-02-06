const httpProxy = require("express-http-proxy");
const pet = httpProxy("http://34.207.221.200:6666");

const crudService = (router) => {
  router.get("/all-owner", (req, res, next) => {
    pet(req, res, next);
  });

  router.post("/owner", (req, res, next) => {
    pet(req, res, next);
  });

  router.delete("/owner", (req, res, next) => {
    pet(req, res, next);
  });

  router.get("/pet", (req, res, next) => {
    pet(req, res, next);
  });

  router.post("/pet", (req, res, next) => {
    pet(req, res, next);
  });

  router.delete("/pet/:id", (req, res, next) => {
    pet(req, res, next);
  });
};

module.exports = crudService;

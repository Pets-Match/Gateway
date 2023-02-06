const httpProxy = require("express-http-proxy");
const match = httpProxy("http://localhost:4000");

const matchService = (router) => {
  router.get("/match-response", (req, res, next) => {
    match(req, res, next);
  });

  router.get("/get-animal", (req, res, next) => {
    match(req, res, next);
  });

  router.get("/my-matches", (req, res, next) => {
    match(req, res, next);
  });

  router.post("/pet-bus", (req, res, next) => {
    match(req, res, next);
  });
};

module.exports = matchService;

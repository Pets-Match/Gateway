const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const router = require("./proxyRoutes/index.routes");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

var server = http.createServer(app);
server.listen(3030, () => {
  console.log("Gateway on: 3030");
});

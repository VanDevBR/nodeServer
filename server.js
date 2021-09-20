const cors = require("cors");
const express = require("express");
const app = express();
const fs = require('fs');
const key = fs.readFileSync('./key.pem');
const cert = fs.readFileSync('./cert.pem');
const https = require('https');

global.__basedir = __dirname;

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors());

const initRoutes = require("./src/routes");

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

let port = 8080;
app.listen(port, () => {
    console.log(`Running at localhost:${port}`);
});
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
require("./Database");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(fileUpload());
app.use(express.static("files"));
app.use('/upload', express.static('upload'));
app.use(cors());

// Define All Routes file Here
const userRoutes = require("./Routes/User");


// Define All Routes Here
app.use("/User", userRoutes);

app.listen(3000, "192.168.0.106", () => {
    console.log("server started");
});

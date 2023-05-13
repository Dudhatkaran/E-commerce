const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("files"));
app.use('/upload', express.static('upload'));
app.use(cors());

// Define All Routes file Here
const userRoutes = require("./routes/User");


// Define All Routes Here
app.use("/users", userRoutes);

// const http = require('http');
// const server = http.createServer((req, res) => {
//     res.end("Server Started");
// })

// server.listen(8000, () => {
//     console.log("server started");
// });

// app.listen(27018, "192.168.1.5", () => {
//     console.log("server started");
// });

// app.listen(8095, "192.168.1.9", () => {
//     console.log("server started");
// });
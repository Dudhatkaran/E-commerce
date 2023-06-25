const express = require("express");
const router = express.Router();
const userController = require("../Controller/User");
const { validatation4login, validatation4signup, validatation4updateuser } = require("../utils/joi.validate");

    
router.post("/Insert", validatation4signup, userController.createUser);
router.post("/Login", validatation4login, userController.userLogin);
router.post("/Update", validatation4updateuser, userController.userUpdate);

module.exports = router;
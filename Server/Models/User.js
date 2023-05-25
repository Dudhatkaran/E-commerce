const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        phone: { type: Number, required: true },
        role: { type: String, required: true },
        isActive: { type: Boolean, default: true },
        otp: { type: Number, default: null },
    },
    {
        timestamps: true,
        versionKey: false,
        autoCreate: true,
    }
);

const newUser = new mongoose.model("user", userSchema, "user");
module.exports = newUser;
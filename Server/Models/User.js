const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
        name: { type: String },
        email: { type: String },
        password: { type: String },
        phone: { type: Number },
        role: { type: String },
    },
    {
        timestamps: true,
        versionKey: false,
        autoCreate: true,
    }
)
const newUser = new mongoose.model("user", userSchema)
module.exports = newUser
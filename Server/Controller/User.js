const userSchema = require("../Models/User");
const messages = require("../utils/messages.json");
const enums = require("../utils/enums.json");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

require("dotenv").config();

module.exports = {
    createUser: async (req, res) => {
        const { email, name, phone, password, role } = req.body;
        try {
            const userExists = await userSchema.findOne({ email, isActive: false });
            if (userExists) {
                return res
                    .status(enums.HTTP_CODE.BAD_REQUEST)
                    .json({ success: false, message: messages.EMAIL_EXISTS });
            }

            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(password, salt);
            const create = { name, email, phone, password: hash, role };

            const userData = await userSchema.create(create);
            if (userData) {
                res.status(enums.HTTP_CODE.OK)
                res.json({ success: true, message: messages.SIGNUP_SUCCESS, id: userData._id });
            } else {
                return res
                    .status(enums.HTTP_CODE.BAD_REQUEST)
                    .json({ status: false, message: messages.ROLE_NOT_FOUND });
            }
        } catch (error) {
            return res
                .status(enums.HTTP_CODE.INTERNAL_SERVER_ERROR)
                .json({ status: false, message: error.message });
        }
    },

    userLogin: async (req, res) => {
        const { password, name } = req.body;
        try {
            const userData = await userSchema.findOne({ name: name });
            if (userData) {

                const userPassword = userData.password;
                const isMatch = await bcrypt.compare(password, userPassword);

                if (!isMatch) {
                    return res
                        .status(enums.HTTP_CODE.BAD_REQUEST)
                        .json({ status: false, message: messages.NOT_MATCH });
                }

                const data = {
                    id: userData._id,
                    email: userData.email,
                    name: userData.name,
                };

                const token = jwt.sign(data, process.env.JWT_SECRET);
                return res
                    .status(enums.HTTP_CODE.OK)
                    .json({ status: true, message: messages.LOGIN_SUCCESS, token, data: userData });
            }
            else {
                const userEmailData = await userSchema.findOne({ email: name });

                if (userEmailData) {

                    const userPassword = userEmailData.password;
                    const isMatch = await bcrypt.compare(password, userPassword);

                    if (!isMatch) {
                        return res
                            .status(enums.HTTP_CODE.BAD_REQUEST)
                            .json({ status: false, message: messages.NOT_MATCH });
                    }

                    const data = {
                        id: userEmailData._id,
                        email: userEmailData.email,
                        name: userEmailData.name,
                    };

                    const token = jwt.sign(data, process.env.JWT_SECRET);
                    return res
                        .status(enums.HTTP_CODE.OK)
                        .json({ status: true, message: messages.LOGIN_SUCCESS, token, data: userEmailData });
                }
                else {
                    return res
                        .status(enums.HTTP_CODE.OK)
                        .json({ status: false, message: messages.USER_NOT_FOUND });
                }
            }
        } catch (error) {
            return res
                .status(enums.HTTP_CODE.INTERNAL_SERVER_ERROR)
                .json({ status: false, message: error.message });
        }
    },

    userUpdate: async (req, res) => {
        const { id, company_id, employeeCount, roleId } = req.body;
        try {
            const findUser = await userSchema.findById({ _id: id });
            if (!findUser) {
                return res
                    .status(enums.HTTP_CODE.BAD_REQUEST)
                    .json({ success: false, message: messages.USER_NOT_FOUND });
            }
            const updateUser = await userSchema.findByIdAndUpdate(id, {
                $set: { company_id, employeeCount, roleId }
            })
            return res
                .status(enums.HTTP_CODE.OK)
                .json({ success: true, message: messages.UPDATE_SUCCESSFULLY, data: updateUser });

        } catch (error) {
            return res
                .status(enums.HTTP_CODE.INTERNAL_SERVER_ERROR)
                .json({ success: false, message: error.message });
        }
    },

};


const Joi = require('joi');
const enums = require("../utils/enums.json");

module.exports = {

    validatation4signup: (req, res, next) => {
        let schema = Joi.object().keys({
            email: Joi.string().email().required(),
            name: Joi.string().required(),
            phone: Joi.number().required(),
            password: Joi.string().required(),
            role: Joi.string().required()
        });

        let { error } = schema.validate(req.body);
        if (error) {
            return res
                .status(enums.HTTP_CODE.BAD_REQUEST)
                .json({ success: false, message: error.details[0].message });
        } else {
            next();
        }
    },

    validatation4login: (req, res, next) => {
        let schema = Joi.object().keys({
            password: Joi.string().required(),
            name: Joi.string()
        });

        let { error } = schema.validate(req.body);
        if (error) {
            return res
                .status(enums.HTTP_CODE.BAD_REQUEST)
                .json({ success: false, message: error.details[0].message });
        } else {
            next();
        }
    },

    validatation4updateuser: (req, res, next) => {
        let schema = Joi.object().keys({
            id: Joi.string().required(),
            roleId: Joi.string(),
        });

        let { error } = schema.validate(req.body);
        if (error) {
            return res
                .status(enums.HTTP_CODE.BAD_REQUEST)
                .json({ success: false, message: error.details[0].message });
        } else {
            next();
        }
    },
}
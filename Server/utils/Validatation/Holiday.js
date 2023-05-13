const Joi = require('joi');
const enums = require("../../utils/enums.json");

module.exports = {

    validatation4insert: (req, res, next) => {
        let schema = Joi.object().keys({
            companyId: Joi.string().required(),
            name: Joi.string().required(),
            date: Joi.date().required(),
            day: Joi.string().required(),
            isActive: Joi.boolean().required()
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

    validatation4Update: (req, res, next) => {
        let schema = Joi.object().keys({
            id: Joi.string().required(),
            name: Joi.string().required(),
            date: Joi.date().required(),
            day: Joi.string().required(),
            isActive: Joi.boolean().required()
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

    validatation4Select: (req, res, next) => {
        let schema = Joi.object().keys({
            companyId: Joi.string().required()
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

    validatation4Delete: (req, res, next) => {
        let schema = Joi.object().keys({
            id: Joi.string().required()
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
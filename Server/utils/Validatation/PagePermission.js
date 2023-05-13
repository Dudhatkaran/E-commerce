const Joi = require('joi');
const enums = require("../../utils/enums.json");

module.exports = {

    validatation4PagePerinsert: (req, res, next) => {
        let schema = Joi.object().keys({
            pageId: Joi.string().required(),
            roleId: Joi.string().required(),
            companyId: Joi.string().required(),
            name: Joi.string(),
            subname: Joi.string(),
            select: Joi.boolean().required(),
            insert: Joi.boolean().required(),
            update: Joi.boolean().required(),
            delate: Joi.boolean().required(),
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

    validatation4PagePerUpdate: (req, res, next) => {
        let schema = Joi.object().keys({
            id: Joi.string().required(),
            name: Joi.string(),
            subname: Joi.string(),
            select: Joi.boolean().required(),
            insert: Joi.boolean().required(),
            update: Joi.boolean().required(),
            delate: Joi.boolean().required(),
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

    validatation4PagePerSelect: (req, res, next) => {
        let schema = Joi.object().keys({
            companyId: Joi.string().required(),
            roleId: Joi.string().required(),
        });

        let { error } = schema.validate(req.body);
        if (error) {
            return res
                .status(enums.HTTP_CODE.BAD_REQUEST)
                .json({ success: false, message: error.details[0].message });
        } else {
            next();
        }
    }

}
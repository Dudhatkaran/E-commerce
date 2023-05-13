const Joi = require('joi');
const enums = require("../../utils/enums.json");

module.exports = {

    validatation4insert: (req, res, next) => {
        let schema = Joi.object().keys({
            name: Joi.string().required(),
            user_id: Joi.string().required()
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
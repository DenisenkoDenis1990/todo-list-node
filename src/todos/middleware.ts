const Joi = require("joi");

export const validateTodo = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().min(3).max(30).required(),
    text: Joi.string().min(3).max(30).required(),
  });

  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    return res.json({ message: validationResult.error });
  }
  next();
};

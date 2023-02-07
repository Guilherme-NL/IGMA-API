import Joi from "joi";

const userSchema = Joi.object({
  name: Joi.string().min(3).required(),
  CPF: Joi.string().min(11).max(14).required(),
  birthday: Joi.date().required,
});

export default userSchema;

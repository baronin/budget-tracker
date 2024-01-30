const validate = (schema) => async (req, res, next) => {
  const { body } = req;
  try {
    await schema.validate(body, { abortEarly: false });
    next();
  } catch (error) {
    res.status(409).send({ message: error.errors });
  }
};

export default validate;

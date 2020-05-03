const PaymentMethod = require('../models/Payment_method');

module.exports = {
  async index(req, res) {
    const paymentMethods = await PaymentMethod.findAll();
    return res.json(paymentMethods);
  },
  async store(req, res) {
    const { name } = req.body;
    const paymentMethodExist = await PaymentMethod.findOne({
      where: {
        name,
      },
    });
    if (paymentMethodExist)
      return res.status(400).json({ message: 'Payment Method already exist' });
    const paymentMethod = await PaymentMethod.create({ name });
    return res.json(paymentMethod);
  },

  async update(req, res) {
    return res.status(200).send();
  },
  async delete(req, res) {
    return res.status(204).send();
  },
};

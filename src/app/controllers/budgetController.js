module.exports = {
  async show(req, res) {
    return res.json({ ok: true });
  },
  async store(req, res) {
    return res.json({ ok: true });
  },
  async update(req, res) {
    return res.status(200).send();
  },
  async delete(req, res) {
    return res.status(204).send();
  },
};

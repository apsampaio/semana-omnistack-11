const connection = require('../database/connection');
const crypto = require('crypto');
const generateUniqueId = require('../utils/generateUniqueId');

module.exports = {
  async create(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;
    const id = generateUniqueId();
    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    })
    return res.json({ id });
  },

  async index(req, res) {
    const ongs = await connection('ongs').select('*');
    return res.json(ongs);
  }
}
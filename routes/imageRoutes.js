const express = require('express');
const validatorHandler = require("../middlewares/validatorHandler");
const { getImagSchema } = require("../schemas/imagSchema");
const ImagService = require('../services/imagService')
const router = express.Router();

const service = new ImagService()

router.get(
  '/:id',
  validatorHandler(getImagSchema, 'params'),
  async (req, res, next) => {
    try {
      const id = parseInt(req.params.id);
      if (id < 0) res.status(404).json({ message: 'Img not found' });
      else res.status(200).json(await service.find(id));
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;

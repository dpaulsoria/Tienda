const express = require('express');
const router = express.Router();

const BooksService = require('../services/booksService');
const service = new BooksService();

const validatorHandler = require('../middlewares/validatorHandler');
const {
  createBookSchema,
  updateBookSchema,
  getBookSchema,
  deleteBookSchema,
} = require('../schemas/bookSchema');
const {getUserSchema, updateUserSchema} = require("../schemas/userSchema");

router.post(
  '/',
  validatorHandler(createBookSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      res.status(201).json(await service.create(body));
    } catch (err) {
      next(err);
    }
  }
);

router.get('/all', async (req, res, next) => {
  try {
    res.json(await service.books);
  } catch (err) {
    next(err);
  }
});

router.get(
  '/:id',
  validatorHandler(getBookSchema, 'params'),
  async (req, res, next) => {
    try {
      const id = parseInt(req.params.id);
      if (id < 0) res.status(404).json({ message: 'Book not found' });
      else res.status(200).json(await service.find(id));
    } catch (err) {
      next(err);
    }
  }
);

router.delete(
  '/:id',
  validatorHandler(deleteBookSchema, 'params'),
  async (req, res, next) => {
    try {
      const id = parseInt(req.params.id);
      if (id < 0) res.status(404).json({ message: 'Book not found to delete' });
      else res.status(200).json(await service.delete(id));
    } catch (err) {
      next(err);
    }
  }
);

router.patch(
  '/:id',
  validatorHandler(getBookSchema, 'params'),
  validatorHandler(updateBookSchema, 'body'),
  async (req, res, next) => {
    try {
      const id = parseInt(req.params.id);
      const body = req.body;
      if (id < 0) res.status(404).json({ message: 'Book not found to update' });
      else res.status(200).json(await service.update(id, body));
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;

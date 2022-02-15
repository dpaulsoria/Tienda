const express = require('express');
const router = express.Router();

const UserService = require('../services/usersService');
const service = new UserService();

const validatorHandler = require('../middlewares/validatorHandler');
const {
  createUserSchema,
  updateUserSchema,
  getUserSchema,
  deleteUserSchema,
  loginUserSchema
} = require('../schemas/userSchema');

router.post(
  '/',
  validatorHandler(createUserSchema, 'body'),
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
    res.json(await service.users);
  } catch (err) {
    next(err);
  }
});

router.post(
  '/login',
  validatorHandler(loginUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body
      const user = body.user
      const password = body.password
      console.log(body, user, password)
      if (user < 0) res.status(404).json({ message: 'User not found' });
      else res.status(200).json(await service.login(user, password));
    } catch (err) {
      next(err);
    }
  }
);

router.get(
  '/:username',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const username = req.params.username;
      if (username.length < 0) res.status(404).json({ message: 'Not found' });
      else res.status(200).json(await service.find(username));
    } catch (err) {
      next(err);
    }
  }
);

router.delete(
  '/:username',
  validatorHandler(deleteUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const username = req.params.username;
      if (username.length < 0)
        res.status(404).json({ message: 'User not found to delete' });
      else res.status(200).json(await service.delete(username));
    } catch (err) {
      next(err);
    }
  }
);

router.patch(
  '/:user',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const user = parseInt(req.params.user);
      const body = req.body;
      if (user < 0)
        res.status(404).json({ message: 'User not found to update' });
      else res.status(200).json(await service.update(user, body));
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;

import express from 'express';
import models  from '../models';

var router = express.Router();

router.get('/', (req, res) => {
  models.todos.findAll()
    .then((todos) => {
      res.json(todos);
    });
});

router.post('/', (req, res) => {
});

router.delete('/:id', (req, res) => {
});

export default router;

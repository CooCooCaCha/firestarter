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
  models.todos.create({body: req.body.body})
    .then((todo) => {
       res.json({ id: todo.id, body: todo.body });
    });
});

router.delete('/:id', (req, res) => {
  models.todos.findById(req.params.id)
    .destroy()
    .then(() => {
      res.redirect('/');
    });
});

export default router;

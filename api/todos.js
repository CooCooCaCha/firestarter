import express from 'express';
import models  from '../models';

var router = express.Router();

router.get('/', (req, res) => {
  models.Todo.findAll()
    .then((todos) => {
      res.json(todos);
    });
});

router.post('/', (req, res) => {
  models.Todo.create({body: req.body.body})
    .then((todo) => {
       res.json({ id: todo.id, body: todo.body });
    });
});

router.delete('/:id', (req, res) => {
  models.Todo.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(() => {
      res.json({id: req.params.id});
    });
});

export default router;

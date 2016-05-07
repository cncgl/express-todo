/**
 * Created by shigeru on 15/09/16.
 */
//var config = require('config');
var path      = require('path');
var env       = process.env.NODE_ENV || 'development';
var config    = require(path.join(__dirname, '/../config/config.json'))[env];
var express   = require('express');
var router    = express.Router();
var Sequelize = require('sequelize');
var sequelize = new Sequelize(config.database,
  config.username,
  config.password,
  config);

var Todo = sequelize.define('todos',
  {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    status: {type: Sequelize.BOOLEAN, allowNull: false},
    title: {type: Sequelize.STRING, allowNull: false}
  }, {
    createdAt: 'inserted_at',
    updatedAt: 'updated_at'
  });

/* GET todos listing. */
router.get('/', function(req, res, next) {
  Todo.findAll({ order: [['id', 'ASC']] }).then(function(todos) {
    res.json(todos);
  });
});


function update(req, res, next) {
  Todo.findById(req.params.id).then(function(todo) {
    todo.update({
      status: req.body.status,
      title:  req.body.title
    }).then(function(todo) {
      res.json(todo);
    });
  });
}

router.get('/:id', function(req, res, next) {
  Todo.findById(req.params.id).then(function(todo) {
    res.json(todo);
  });
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  Todo.create({
    status: req.body.status,
    title:  req.body.title
  }).then(function(todo) {
    res.json(todo);
  });
});

router.put('/:id', update);

router.patch('/:id', update);

router.delete('/:id', function(req, res, next) {
  Todo.findById(req.params.id).then(function(todo) {
    todo.destroy();
    res.status(204).send('');
  });
});

module.exports = router;

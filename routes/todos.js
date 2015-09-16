/**
 * Created by shigeru on 15/09/16.
 */
var express = require('express');
var router = express.Router();
//var pg = require('pg');
//var conString = 'postgres://postgres:postgres@localhost/hello_phoenix_dev';
var Sequelize = require('sequelize');
var sequelize = new Sequelize('hello_phoenix_dev', 'postgres', 'postgres',
    { host: 'localhost', dialect: 'postgres', pool: { max:5, min:0, idle:10000} });

var Todo = sequelize.define('todos', {
        id: {type: Sequelize.INTEGER, primaryKey: true},
        status: {type: Sequelize.BOOLEAN, allowNull: false},
        title: {type: Sequelize.STRING, allowNull: false}
    }, {
        createdAt: 'inserted_at',
        updatedAt: 'updated_at'
    });

/* GET todos listing. */
router.get('/', function(req, res, next) {
    //res.send('index');
    Todo.findAll().then(function(todos) {
        res.json(todos);
    });

    /*
    pg.connect(conString, function(err, client, done) {
        if (err) {
            return console.error('error fetching client pool', err);
        }
        var rows = [];
        var query = client.query('select * from todos order by id');

        query.on('error', function(error) {
            console.error(error);
        });
        query.on('row', function(row) {
            rows.push(row);
        });
        query.on('end', function(row, error) {
            console.log("end event start");
            if(!error) {
                res.json(rows);
            }
        });
    });
    */
});

router.get('/:id', function(req, res, next) {
    res.send('show:'+req.params.id);
});

router.post('/', function(req, res, next) {
    res.send('create');
});

router.put('/:id', function(req, res, next) {
    res.send('update(put)'+req.params.id);
});

router.patch('/:id', function(req, res, next) {
    res.send('update(patch)'+req.params.id);
});

router.delete('/:id', function(req, res, next) {
    res.send('delete:'+req.params.id);
});


module.exports = router;

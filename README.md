# express-todo

[![Build Status](https://travis-ci.org/cncgl/express-todo.svg?branch=master)](https://travis-ci.org/cncgl/express-todo)
[![Code Climate](https://codeclimate.com/github/cncgl/express-todo/badges/gpa.svg)](https://codeclimate.com/github/cncgl/express-todo)
[![Issue Count](https://codeclimate.com/github/cncgl/express-todo/badges/issue_count.svg)](https://codeclimate.com/github/cncgl/express-todo)
[![Dependency Status](https://gemnasium.com/cncgl/express-todo.svg)](https://gemnasium.com/cncgl/express-todo)


Todo Application on Express and Sequelize

## Preparation

Install PostgreSQL 9.x and create user: postgres with password: postgres.
And create database: express_todo_development.


## Install
```
$ npm i
$ npm run migrate
```

## Usage
```
$ npm start
```

## Test
```
$ npm test
```

## API
index
```
$ curl http://localhost:3000/api/todos
```

show
```
$ curl http://localhost:3000/api/todos/:id
```

create
```
$ curl http://localhost:3000/api/todos -H "Content-type: application/json" \
 -X POST -d '{"status":true, "title":"Shopping"}'
```

update
```
$ curl http://localhost:3000/api/todos/:id -H "Content-type: application/json" \
 -X PUT -d '{"status":true, "title":"Meeting"}'
```

delete
```
$ curl http://localhost:3000/api/todos/:id -X DELETE
```

## License
MIT
[![Code Climate](https://codeclimate.com/github/cncgl/electron-todo/badges/gpa.svg)](https://codeclimate.com/github/cncgl/electron-todo)

# express-todo
Todo Application on Express and Sequelize

## Preparation

Install PostgreSQL 9.x and create user: postgres with password: postgres.
And create database: sample_dev.


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
# express-todo
Todo Application on Express and Sequelize

## Install
```
$ npm i
```

## How to use
```
$ npm start
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
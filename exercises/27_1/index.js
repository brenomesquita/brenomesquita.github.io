const express = require("express");
const bodyParser = require("body-parser");
const simpsonRoute = require('./routerSimpson');
const crypto = require('crypto')


const port = 3000;

const app = express();
app.use(bodyParser.json());

app.get('/', (request, response) => {
  response.send('Hello World!!')
});

app.post('/ping', (request, response) => {
  response.send(response.headers.authorization)
});

app.use((request,res, next) => {
  console.log(crypto.randomBytes(8).toString('hex'))
  if (authorization && authorization.length === 16) return next();
  return res.status(401).json({ message: 'Token inválido!' });
})

app.get('/ping', (request, response) => {
  response.send({
    message: 'pong'
  })
});

//app.post('/hello', (request, response) => {
//  name.push(request.body)
//  response.json({ status: 'User created successfully!' });
//});

//app.get('/hello', (request, response) => {
//  response.json(name.map((el) => `o nome ś ${el.name}`);
//});

app.post('/hello', (req, res) => {
  const name = req.query.name;
  const age = req.query.age;
  if(Number(age)<18){
    console.log(age)
    return res.status(401)
      .json({ message: `nao pode` });
  }
  res.status(200)
    .json({ message: `Hello, ${name}` });
});

app.put('/users/:name/:age', (request, response) => {
  response.send({ "message": `Seu nome é ${request.params.name} e você tem ${request.params.age} anos de idade` })
});

app.use('/simpsons', simpsonRoute);

app.use('*', (request, response) => {
  response.status(404).json({ message: "endpoint does not exist! sorry )':" });
})

app.use((error, request, response) => {
  response.status(500).send(`error ${error.message}`)
})

app.listen(port, console.log('rodando'));
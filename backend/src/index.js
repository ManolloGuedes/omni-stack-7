const express = require('express');
const mongoose = require ('mongoose');
const path = require ('path');
const cors = require ('cors');

const app = express(); //criando aplicação servidor

const server = require('http').Server(app);//habilitando conexões http
const io = require('socket.io')(server); //habilitando conexões ws

//estabelecendo conexão com o cluster do mongo
mongoose.connect('mongodb+srv://semana:semana@cluster0-qevpq.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true
});

app.use((req, res, next) => {
  req.io = io; //disponibilizando o io para toda a aplicação
  
  next();
});

app.use(cors()); //permite que todo tipo de aplicação acesse o backend

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized'))); //toda vez que eu acessar /files irei para a pasta resized

app.use(require('./routes'));

server.listen(3333); //ouvindo porta 3333 no protocolo http


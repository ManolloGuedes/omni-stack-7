const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const Post = require('../models/Post');

module.exports = {
  async index(req, res) {
    const posts = await Post.find().sort('-createdAt'); //busca todos os posts e ordena de forma decrescente pelo createdAt

    return res.json(posts);
  },

  async store(req, res) {
    const {author, place, description, hashtags} = req.body; //desestruturação para a recuperação dos dados do json body
    const {filename: image} = req.file;

    const [name] = image.split('.');
    const filename = `${name}.jpg`;

    await sharp(req.file.path)
      .resize(500)
      .jpeg({quality: 70})
      .toFile(
        path.resolve(req.file.destination, 'resized', filename)
      ); //redimensionamento da imagem

    fs.unlinkSync(req.file.path); //apagando a imagem que não está redimensionada

    const post = await Post.create({ //criando objeto Post com os parametros da desestruturação
      author,
      place,
      description,
      hashtags,
      image
    });

    req.io.emit('post', post); //enviando msg via ws

    return res.json(post);
  }
};
const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  //define os registros do meu schema
  author: String,
  place: String,
  description: String,
  hashtags: String,
  image: String,
  likes: {
    type: Number,
    default: 0
  }
}, {
  //para cada registro da tabela será criado um campo created at e updated at
  timestamps: true
});

module.exports = mongoose.model('Post', PostSchema);
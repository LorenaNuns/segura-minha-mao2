const mongoose = require ('mongoose');
const PostSchema = new mongoose.Schema({
    nome:String,
    email:String,
    dataDeNasc:String,

    pergunta1:String,
    pergunta2:String,
    pergunta3:String,
    pergunta4:String,




    
});

module.exports = mongoose.model('Post', PostSchema);
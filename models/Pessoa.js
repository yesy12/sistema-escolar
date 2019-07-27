const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Pessoa = {
    nome: {
        type: String,
        required: true
    },
    sobrenome: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    cpf: {
        type: Number,
        required: true
    },
    estado: {
        type: String,
        required: true
    },
    cidade:{
        type:String,
        required: true
    },
    numero: {
        type: Number,
        required: true
    },
    detalhe: {
        type: String,
        required: true
    },
    isAdmin:{
        type: Number,
        default: 0
    },
    isProfessor:{
        type: Number,
        default: 0
    },
    dateCreation:{
        type: Date,
        default: Date.now(),
        required: true
    },
    dateModified:{
        type: Date,
        default: Date.now(),
        required: true
    }
}

mongoose.model("pessoas",Pessoa)
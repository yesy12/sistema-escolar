const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const People = {
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    cpf: {
        type: Number,
        required: true
    },
    cep:{
        type: Number,
        required: true
    },
    address:{
        type:String,
        required:true
    },
    state: {
        type: String,
        required: true
    },
    city:{
        type:String,
        required: true
    },
    number: {
        type: Number
    },
    detail: {
        type: String,
    },
    isAdmin:{
        type: Number,
        default: 0
    },
    isTeacher:{
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

mongoose.model("peoples",People)
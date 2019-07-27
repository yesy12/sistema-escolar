//Express
const express = require("express")
const router = express.Router();

//Mongodb
const mongoose = require("mongoose");
require("../models/People")
const People = mongoose.model("peoples")

//Routes
router.get("/",(req,resp)=>{
    resp.render("index",{
        title : "Sistema Escolar",
        content : "ok"
    })
})

router.get("/login",(req,resp)=>{
    resp.render("login",{
        title : "Login do Sistema Escolar"
    })
})

router.get("/cadastro",(req,resp)=>{
    resp.render("cadastro",{
        title : "Cadastro do Sistema Escolar"
    })
})

router.post("/cadastro",(req,resp)=>{

    var nome = req.body.nome;
    var sobrenome = req.body.sobrenome;
    var email =  req.body.email;
    var senha = req.body.senha;
    var resenha = req.body.resenha;
    var cpf = req.body.cpf;
    var cep = req.body.cep;
    var endereco = req.body.endereco;
    var estado = req.body.estado;
    var cidade = req.body.cidade;
    var numero = req.body.numero;
    var detalhe = req.body.detalhe;

    var erros = [];

    /* Nome */
    if(!nome || typeof nome == undefined || nome == null || typeof nome == Number){
        erros.push({
          texto:"Nome Inválido"
        })
      }   
    if(nome.length > 0 && nome.length < 3){
        erros.push({
          texto:"Nome pequeno"
        })
    }
    if(nome.length > 25){
        erros.push({
            texto: "Nome muito grande"
        })
    }

    /* Sobrenome */
    if(!sobrenome || typeof sobrenome == undefined || sobrenome == null || typeof sobrenome == Number){
        erros.push({
          texto: "Sobrenome Inválido"
        })
      }   
    if(sobrenome.length > 0 && sobrenome.length < 3){
        erros.push({
          texto:"Sobrenome pequeno"
        })
    }    
    if(sobrenome.length > 25){
        erros.push({
            texto: "sobrenome muito grande"
        })
    }

    /* Email */
    if(!email || typeof email == undefined || email == null || typeof email == Number || email.length > 0 && email.length < 10){
        erros.push({
          texto:"E-mail Inválido"
        })
      }      
    if(email.length > 100){
        erros.push({
            texto: "E-mail muito grande"
        })
    }
    People.findOne({
        email: email
    })
    .then((emailDb)=>{
        erros.push({
            texto : "E-mail já cadastrado"
        })
    })

    /* Senha */
    if(!senha || typeof senha == undefined || senha == null){
        erros.push({
          texto:"Senha Inválida"
        })
      }   
    if(senha.length > 0 && senha.length < 3){
        erros.push({
          texto:"Senha pequena"
        })
    }
    if(senha.length > 32){
        erros.push({
            texto: "Senha muito grande"
        })
    }
    /* Resenha */
    if( !(resenha == senha)){
        erros.push({
            texto : "Repita a sua senha"
        })
    }
    
    /* Cpf */
    if(!cpf || typeof cpf == undefined || cpf == null || cpf.length > 0 && cpf.length < 10){
        erros.push({
          texto:"Cpf Inválido"
        })
    }   
    /*Verificação se o cpf é valido

    /* Cep */
    if(!cep || typeof cep == undefined || cep == null || cep.length > 0 && cep.length < 8){
        erros.push({
          texto:"Cep Inválido"
        })
    }  


    /* Endereco */
    if(!endereco || typeof endereco == undefined || endereco == null){
        erros.push({
          texto:"Endereço Inválido"
        })
    }   
    /* Verificar se o endereco está correto */


    /* Estado */
    if(!estado || typeof estado == undefined || estado == null){
        erros.push({
          texto:"Estado Inválido"
        })
    }   
    /* Verificar se o estado está correto */

    /* Cidade */
    if(!cidade || typeof cidade == undefined || cidade == null){
        erros.push({
          texto:"Cidade Inválida"
        })
    }   
    /* Verificar se a cidade está correta */

    /* Numero */
    if(!numero || typeof numero == undefined || numero == null || typeof numero == String){
        erros.push({
          texto:"Número Inválido"
        })
    }   

    /*Verificar se é possivel infectar o banco de dados com os dados*/

    if(erros.length > 0){
        resp.render("cadastro",{
            erros : erros
        })
    }
    else{
        const newPeople = {
            name : nome,
            lastName : sobrenome,
            address : endereco,
            email: email,
            password : senha,
            cpf : cpf,
            cep : cep,
            state  : estado,
            city : cidade,
            number : numero,
            detail : detalhe
        }

        new People(newPeople).save()
        .then(()=>{
            console.log("Cadastrado")
            resp.redirect("/login")
        })
        .catch((error)=>{
            console.log(`Error: ${error}`)
            resp.render("cadastro",{
                title : "Cadastro do Sistema Escolar",
                content: newPeople
            })
        })
    }
})


     
module.exports = router;
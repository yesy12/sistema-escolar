const express = require("express")

const router = express.Router();

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
    var senha = req.body.senha;
    var resenha = req.body.resenha;
    var cpf = req.body.cpf;
    var cep = req.body.cep;
    var estado = req.body.estado;
    var cidade = req.body.cidade;
    var numero = req.body.numero;
    var detalhe = req.body.detalhe;

    const newPeople = {
        nome,
        sobrenome,
        senha,
        cpf,
        cep,
        estado,
        cidade,
        numero,
        detalhe
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

    resp.redirect("/login")
})


     
module.exports = router;
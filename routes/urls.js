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

    /*
    {"nome":"dhdb",
    "sobrenome":"gj",
    "senha":"",
    "re-senha":"",
    "cep":"6768",
    "endereco":"gjyh",
    "numero":"757",
    "detalhe":"57hg"}
    */

    
    resp.redirect("/login")
})


     
module.exports = router;
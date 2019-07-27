const express = require("express");
const app = express();
const hbs = require("express-handlebars")


//Handlebars
app.set("view engine","hbs")

app.engine("hbs",hbs({
    extname : "hbs",
    layoutsDir : `${__dirname}/views/layouts`,
    partialsDir : `${__dirname}/views/partials`,
    defaultLayout : "main"
}))

app.get("/",(req,res)=>{
    res.render("index",{
        title : "Sistema Escolar",
        content : "ok"
    })
})


const port = 8000;
app.listen(port,()=>{
    console.log(`Running on port ${port}`)
})
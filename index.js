//Express
const express = require("express");
const app = express();
app.use(express.static(`${__dirname}/public`) );

//Handlebars
const hbs = require("express-handlebars");
app.set("view engine","hbs");

app.engine("hbs",hbs({
    extname : "hbs",
    layoutsDir : `${__dirname}/views/layouts`,
    partialsDir : `${__dirname}/views/partials`,
    defaultLayout : "main"
}));

//Body Parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
    extended : false
}));
app.use(bodyParser.json())

//Mongoose
const mongoose = require("mongoose");

//Routes
const urls = require("./routes/urls");
app.use("/",urls);


const port = 8000;
app.listen(port,()=>{
    console.log(`Running on port ${port}`)
})
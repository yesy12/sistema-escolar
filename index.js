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
mongoose.Promise = global.Promise;
const authLink = require("./config/auth").link;
console.log(authLink)
mongoose.connect(authLink,{useNewUrlParser: true})
.then(()=>{
    console.log("Connect on Mongodb")
})
.catch((error)=>{
    console.log(`Error: ${error}`)
})

//Routes
const urls = require("./routes/urls");
app.use("/",urls);


const port = 8000;
app.listen(port,()=>{
    console.log(`Running on port ${port}`)
})
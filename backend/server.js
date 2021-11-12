const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const app = express();  
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const pth = process.env.URI;
mongoose.connect(pth, { useNewUrlParser: true, useUnifiedTopology: true}).then(()=> console.log(" Successfully running on 5000")).catch(error => console.log("Failed to connect",error));


const addAcc = require('./routes/addAcc'); 

if(process.env.NODE_ENV === "production"){ 
    app.use(express.static("client/build"));
    app.get('/*',function(req,res){
        res.sendFile(path.join(__dirname,"client/build/index.html"))
    })
}
app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname,"client/build/index.html"))
})
//app.use(createProxyMiddleware('/ac',{target:'https://bhav-ecommerceapp.herokuapp.com/ecom/'}));
//const apiProxy = createProxyMiddleware('/',{target:'https://bhav-ecommerceapp.herokuapp.com/ecom/auth'});
//app.use(apiProxy); 
 
app.use('/ecom', addAcc); 

app.listen(PORT, () => {
    console.log();
});  
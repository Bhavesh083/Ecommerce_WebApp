const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();  
const PORT = process.env.PORT || 80;


app.use(cors());
app.use(express.json());
 
mongoose.connect("mongodb+srv://bhavesh:passwordecom01@ecommerceacc.ilmxs.mongodb.net/ItemsLists?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true}).then(()=> console.log(" Successfully running on 5000")).catch(error => console.log("Failed to connect",error));
//passwordecom01

const addAcc = require('./routes/addAcc'); 

if(process.env.NODE_ENV === "production"){ 
    app.use(express.static("client/build"));
}

app.use(createProxyMiddleware('/ac',{target:'http://localhost:5000'}));
//const apiProxy = createProxyMiddleware('/',{target:'http://localhost:5000/ac/auth'});
//app.use(apiProxy); 
 
app.use('/ac', addAcc); 

app.listen(PORT, () => {
    console.log();
});  
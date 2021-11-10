const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();  
const port = process.env.PORT || 5000;
 
app.use(cors());
app.use(express.json());
 
mongoose.connect("mongodb+srv://bhavesh:passwordecom01@ecommerceacc.ilmxs.mongodb.net/ItemsLists?retryWrites=true&w=majority", { useNewUrlParser: true}).then(()=> console.log(" Successfully running on 5000")).catch(error => console.log("Failed to connect",error));
 
const addItems = require('./routes/addItem'); 
const addAcc = require('./routes/addAcc'); 
 
app.use('/item', addItems); 
app.use('/acc', addAcc); 

app.listen(port, () => {
    console.log();
});  
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();  
const port = process.env.PORT || 5000;
 
app.use(cors());
app.use(express.json());
 
mongoose.connect("mongodb+srv://bhavesh:passwordecom01@ecommerceacc.ilmxs.mongodb.net/ItemsLists?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true}).then(()=> console.log(" Successfully running on 5000")).catch(error => console.log("Failed to connect",error));
//passwordecom01
const addItems = require('./routes/addItem'); 
const addAcc = require('./routes/addAcc'); 
 
app.use('/item', addItems); 
app.use('/ac', addAcc); 

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('../build'));
}

app.listen(port, () => {
    console.log();
});  
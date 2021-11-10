const router = require('express').Router();
let Accounts = require('../models/account.model');

router.route('/').get((req, res) => {
  Accounts.find() 
    .then(acc => res.json(acc)) 
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/auth').post((req,res) => { 
    Accounts.findOne({email:req.body.email,password:req.body.password}).then((acc) => {
        console.log(acc);
        if(acc===null){
          res.json(false);} 
        else{
          res.json(true)};
      }).catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/del').delete((req, res) => {
    Accounts.deleteMany({password:"ab"})    
      .then(acc => res.json("Deleted s"))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
  Accounts.findOne({email:req.body.email},{_id:0,__v:0,name:0,password:0}).then((acc) => {
   if(acc===null){
        const newAcc = new Accounts({  
        name : req.body.fullname, 
        email : req.body.email, 
        password : req.body.password,  
        orders : [],
        cart : [] 
    });
        newAcc.save().then(() => res.json(true)).catch(err => res.status(400).json('Error: ' + err));}
   else{
      res.json(false);}}).catch(err => console.log('Error in findOne: ' + err));
});

router.route('/addOrders').post((req,res) => {
    Accounts.findOne({email:req.body.email})
    .then(acc => { 
      acc.orders = req.body.ord;
      acc.save()
        .then(() => res.json('order updated!'))     
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Acc not found'));
});

router.route('/addCart').post((req,res) => {
    Accounts.findOne({email:req.body.email})
    .then(acc => { 
      acc.cart = req.body.ord;
      acc.save()
        .then(() => res.json('order updated!'))     
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Acc not found'));
});

module.exports = router; 
  

//{
//        "email": "2nv3k",
//        "ord" : {
//                "id":"3",
//                "title":"SONY ZX110 Wireless Extra Bass Headphones",
//                "cost":35,
//                "rating":4,
//                "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdZOjVB7-VEgNtXt0onZyXIYHfMtlP_pYjMctkPwnRMsy_c5oxe4LQAcBPF5yylBz5lqA&usqp:CAU"
//        }   
//}
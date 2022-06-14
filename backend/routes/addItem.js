const router = require('express').Router();
let Items = require('../models/Item.model');

router.route('/all').get((req, res) => {
  Items.find() 
    .then(items => res.json(items))
    .catch(err => res.status(400).json('Error: ' + err));
}); 

router.route('/fetchProduct').post((req, res) => {
  Items.findOne({id:req.body.id}) 
    .then(item => {
      res.json(item.reviews)
    })
    .catch(err => res.status(400).json('Error: yoyoyo ' + err));
});
//"https://bhav-ecommerceapp.herokuapp.com/ecom/fetchCart"
module.exports = router;
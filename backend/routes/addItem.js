const router = require('express').Router();
let Item = require('../models/Item.model');

router.route('/').get((req, res) => {
  Item.find() 
    .then(items => res.json(items))
    .catch(err => res.status(400).json('Error: ' + err));
});
 
router.route('/add').post((req,res) => {

  const newItem = new Item({
    id:'3',
    title:'SONY ZX110 Wireless Extra Bass Headphones ',
    cost:35,
    rating:4,
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdZOjVB7-VEgNtXt0onZyXIYHfMtlP_pYjMctkPwnRMsy_c5oxe4LQAcBPF5yylBz5lqA&usqp:CAU'
  }); 

  newItem.save()                                                 
    .then(() => res.json('Item added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
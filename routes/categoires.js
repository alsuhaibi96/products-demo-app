const express = require('express');
const axios = require('axios')
var router = express.Router();

/* GET category page. */
router.get('/',  function(req, res, next){
  axios.get("https://dummyjson.com/products/categories")
  .then((response) =>  {
    res.render('categories', {title: 'category', products: response.data });
  }).catch((err) =>{
    console.log("err")
  })
});



module.exports = router;
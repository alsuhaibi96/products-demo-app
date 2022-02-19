var express = require('express');
var router = express.Router();
const axios1=require("axios");
const dummy_instance=axios1.create({
baseURL:'https://dummyjson.com/',
});

// getting home page which is products 
router.get('/', function(req,res,next)
{
  //getting dummy products data
axios1.get('https://dummyjson.com/products')
.then((response)=>
{
 //rendering products page
  res.render('index',{title:'home',products:response.data.products});
}
)
.catch((error)=>
{
  console.log(error);
})
});


module.exports = router;

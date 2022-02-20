var express = require('express');
var router = express.Router();
const axios1=require("axios").default;
const app = require('../app');
const dummy_instance=axios1.create({
baseURL:'https://dummyjson.com/',
});

// getting home page which is products 
router.get('/products',async function(req,res,next)
{
  //getting dummy products data
await axios1.get('https://dummyjson.com/products')
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

router.get('/',async function(req,res,next)
{
  //getting dummy products data
await axios1.get('https://dummyjson.com/products')
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



router.get('/product/:id', async function(req, res, next){
  const pid = req.params.id;
  await axios1.get('https://dummyjson.com/products/'+pid)
  .then((response) =>{
  res.render('product', {title: 'details', details: response.data,})
  })  
  .catch((err)=>{
    console.log(err)
  })
});



// getting home page which is products 
// router.get('/products/id', function(req,res,next)
// {
//   //getting dummy products data
// axios1.get('https://dummyjson.com/products')
// .then((response)=>
// {
//  //rendering products page
//   res.render('product',{title:'Product Detials',productDetials:response.data.products});
// }
// )
// .catch((error)=>
// {
//   console.log(error);
// })
// });



// /* GET users listing. */
// router.get('product', function(req, res, next) {
//   res.send('respond with a resource');
// });


module.exports = router;

const express = require('express');
const app=express();

const productRoutes=require('./routes/productRoutes')

app.get('/',(req,res)=>{
    res.send('hello');
})

app.use('/api/products',productRoutes)
app.listen(5000,()=>{
    console.log('loged in')
});
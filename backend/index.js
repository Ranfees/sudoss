const express = require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send('hello');
})

app.get('/api/products',(req,res)=>{
    res.send('products pge')
})
app.listen(5000,()=>{
    console.log('loged in')
});
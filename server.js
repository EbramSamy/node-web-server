/**
 * Created by Ebram Samy on 2/18/2017.
 */


const express=require('express');

var app=express();

app.get('/',(req,res)=>{
  // res.send("Hello Express ");
    res.send({
       name:'Ebram',
        city:'Ca'
    });
});


app.get('/about',(req,res)=>{
    res.send("<h1> About Page .... </h1>");
});

app.get('/bad',(req,res)=>{
    res.send({
        ErrorMessage:'Unable to handel Request'
    });
});




app.listen(3000);
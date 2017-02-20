/**
 * Created by Ebram Samy on 2/18/2017.
 */


const express=require('express');
const hbs=require('hbs');
const fs=require('fs');

hbs.registerPartials(__dirname+"/views/partials");
hbs.registerHelper('GetCurrentYear',()=>{
   return new Date().getFullYear();
});

hbs.registerHelper('ScreamIt',(text)=>{
    return text.toUpperCase();
});
var app=express();
app.set('view engine','hbs');


app.use(express.static(__dirname+"/public"));

app.use((req,res,next)=>{
    var now= new Date().toString();
    var log= `${now} : ${req.method} ${req.url}`+"\n";
    console.log(log);
    fs.appendFile('server.log',log,(err)=>{
       if(err)
       {
           console.log("Unable to append server.log");
       }
    });
   next();
});

app.get('/',(req,res)=>{
    res.render("home.hbs",{
        pageTitle:'Home Page',
        welcomeMessage:'Welcome Here ;)'
    });
});

app.get('/json',(req,res)=>{
  // res.send("Hello Express ");
    res.send({
       name:'Ebram',
        city:'Ca'
    });
});


app.get('/about',(req,res)=>{
    res.render("about.hbs",{
        pageTitle:'About Page'
    });
});

app.get('/bad',(req,res)=>{
    res.send({
        ErrorMessage:'Unable to handel Request'
    });
});




app.listen(3000,()=>{
    console.log(" Server is up on port 3000 ");
});
//jshint esversion:6

const express = require("express");
const bodyparser = require("body-parser");
const ejs = require("ejs");

const homeStartingContent = "Main Page";
const aboutStartingContent = "About Page";
const contactStartingContent = "Contact Page";

const app = express();

app.set('view engine','ejs');
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"));

const tasks = [];

app.listen(3000, function(){
    console.log("Server started on 3000");
});

app.get("/", function(req,res){
    res.render("home",{
        startingContent: homeStartingContent,
        tasks: tasks
    });
});

app.get("/about", function(req,res){
    res.render("about",{aboutContent: aboutStartingContent});
});

app.get("/contact", function(req,res){
    res.render("contact",{contactContent: contactStartingContent});
});

app.get("/compose", function(req,res){
    res.render("compose");
});

app.post("/compose",function(req,res){
    tasks.push({
        title : req.body.postTitle,
        body : req.body.postBody
    }); 
    res.redirect("/");
})
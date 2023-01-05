const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname+"/date.js");
const app = express();


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}) );
app.use(express.static("public"));
let items=["Buy Food","Prep Lunch","Play with your cat"];
let workItems=[];

app.get('/', function(req,res){
    let day = date();
    
    res.render("list", {
        listTitle:day,
        newToDoItems:items,
    });

})

app.post('/', function(req,res){
    let item = req.body.newToDo;
    if(req.body.list==="Work List"){
        workItems.push(item);
        res.redirect("/work");
        console.log(req.body.list);
    }
    else{
        items.push(item);
        console.log(req.body.list);
        res.redirect('/');
    }

})

app.get("/work", function(req,res){
    res.render("list", {
        listTitle:"Work List",
        newToDoItems:workItems,
    });

})



app.listen(3000, function(){
    console.log("Server started on port 3000.");
})
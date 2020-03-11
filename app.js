// BASIC
var express= require('express'); 
var app= express(); 
app.get('/',function(req, res){ 
    res.send("Hey");
});



// ROUTING
var things=require('./things.js')
app.use('/things',things)
app.listen(3000,function(){
console.log("example app is running on port 3000");
});



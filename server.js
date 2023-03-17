var express = require('express');
var app = express();
var port = process.env.port || 3000;

//reference 
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/',function(req,res) {
    res.render('index.html');
})

function complexMath(no1,no2) {
    return parseInt(no1) + parseInt(no2);
}

app.get("/addTwoNumbers", (req,res) => {
    var no1 = req.query.no1;
    var no2 = req.query.no2;
    var result = complexMath(no1,no2);

    res.json({statusCode:200, data:result, message: "Success"});
});

app.listen (port, () => {
    console.log("Server"+port);
});
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

//this creates an 'instance' of our app
let app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/dateValues/:date', function(req, res, next){
console.log('URL is working');
var date = req.params.date;
//creating our formatting for 'natural view'
var dateFormatting = {
    year: 'numeric',
    month: 'long',
    day : 'numeric',
};

if (isNaN(date)){
    var naturalDate = new Date(date);
        naturalDate = naturalDate.toLocaleDateString('en-us', dateFormatting);    
    var unixDate = new Date(date).getTime()/1000;
}
else{
    var unixDate = date;
    var naturalDate = new Date (date * 1000);
        naturalDate = naturalDate.toLocaleDateString('en-us', dateFormatting);    
}

res.json({unix: unixDate, natural: naturalDate});
});


app.listen(3000, function(){
    console.log("Listening on port 3000 ...")
})
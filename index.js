var express = require('express');
var app = express();

var server = app.listen(5000,function (){
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s',host,port);
    
});
//if client requests 
//app.get ('/', function (req,res) {
 //       res.send ('hello World');
//});


/*app.route('/Students')
       .get(function (req,res){
            res.send('Get a student');
        })
	   .post(function (req,res){
	   		res.send('Post a student');
	    })
		.put(function (req,res){
			res.send("Update a student");
		})
;*/

app.use(require('body-parser') ());
app.use(require('method-override')());
app.use(require(__dirname + '/config/router') (express.Router())); //dirname where the file being executed is stored
app.use(express.static(__dirname+'/public'));

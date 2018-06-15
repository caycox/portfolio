const express = require ('express');
const app = express();

//set port

var port = process.env.PORT || 5000;

//routes
app.use(express.static(__dirname));

//routes
app.get("/",(res, req, next) => {
	res.render("index");
});


app.listen(port, () => {
	console.log("portfolio tutorial running...");
});
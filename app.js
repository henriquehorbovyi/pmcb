const express = require('express')
const peopleRoutes = require('./routes/people')
const app = express()
const PORT = 7000;
const HOST = 'localhost';

app.use(express.static('public'));
app.use('/bower',express.static('bower_components'));
app.set('view engine', 'pug')
app.use('/people', peopleRoutes);


app.get('/' , (req,res) => {
	console.log('home')
	res.render('index', { title: 'Home', message: 'Welcome!' })
})

var handleErros = (err,req,res, next) => { 
	res.status(500).send("500!");
	res.status(404).send("NOT FOUND!");
	console.log(err);
};
//app.use(handleErros);

app.listen(PORT, () => {
	console.log("Server running at http://%s:%s",HOST, PORT);
});
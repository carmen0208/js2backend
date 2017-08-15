const fs = require('fs');

const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
//get html file

//middle ware
app.use((req,res,next) => {
    var now = new Date().toString();
    log = `${now}: ${req.method} ${req.url}`;
    console.log(log);
    fs.appendFile('server.log', log + '\n');
    next();
});

//user middleware to set
app.use((req,res,next) => {
    res.render('maintenance.hbs');
    // next();
});

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', ()=> {
    return new Date().getFullYear();
})

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
})
app.get('/', (req, res) => {
    // res.send('<h1>Hello, I\'m Carmen</h1>');
    // res.send({
    //     name: 'Carmen',
    //     likes: [
    //         'bette',
    //         'paragliding',
    //         'snowboard'
    //     ]
    // });
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: 'Welcome to my website',
        // currentYear: new Date().getFullYear()
    })
});

app.get('/about', (req,res) => {
    // res.send("About Page");
    res.render('about.hbs', {
        pageTitle: 'About Page', 
        // currentYear: new Date().getFullYear()
        
    });
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Running into an error :<'
    });
});
app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
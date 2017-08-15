const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
//get html file
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
app.listen(3000);
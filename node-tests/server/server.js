const express = require('express');

var app = express();
app.get('/',(req,res) => {
    // res.send('Hello World!');
    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo App v1.0'
    });
});

app.get('/users', (req,res) => {
    res.send([{
        name: 'carmen',
        age: 5
    },{
        name: 'nico',
        age: 4
    },{
        name: 'somebody',
        age: 1
    },
    ]);
})

app.listen(3000);

module.exports.app = app;
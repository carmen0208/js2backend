var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        require: true,
        minilength: 1,
        trim: true 
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});


var User = mongoose.model('User', {
    email: {
        type: String,
        require: true,
        trim: true,
        minilength: 1
    }
});

var user = new User({
    email: 'carmen.liujia@gmail.com   '
});

user.save().then((doc) => {
    console.log('User saved', doc);
}, (e) => {
    console.log('Unable to save user', e);
});


// var newTodo = new Todo({
//     text: 'Cook dinner'
// });

// newTodo.save().then((doc) => {
//     console.log('Save todo', doc);
// },(e) => {
//     console.log('Unable to save todo')
// });

// var otherTodo = new Todo({
//     text: 'Feed cat',
//     completed: true,
//     completedAt: 123
// });

// otherTodo.save().then((doc) => {
//     console.log('Save todo', doc);
// },(e) => {
//     console.log('Unable to save todo')
// });
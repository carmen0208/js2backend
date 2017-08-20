var db = require('./db.js')

module.exports.handleSignup = (email, password) => {
    //check if email already exists
    db.saveUser({
        email,
        password
    });
}
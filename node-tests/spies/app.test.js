const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
    var db = {
        saveUser: expect.createSpy()
    };

    app.__set__('db', db)


    it('should call the spy corrently',() => {
        var spy = expect.createSpy();
        spy('Carmen', '35');
        // expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith('Carmen', '35');
    });

    it('should call saveUser with user Object', () => {
        var email = "carmen.liujia@gmail.com";
        var password = 'start123'

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    }) ;
});
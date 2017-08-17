const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', () => {
    var res = utils.add(33,11);
    // if (res !== 44) {
    //     throw new Error(`Expect 44, but got ${res}`);
    // }
    
    expect(res).toBe(44).toBeA('number');
});

it ('should async add two number', (done) => {
    utils.asyncAdd(33,11,(sum) => {
        expect(sum).toBe(44).toBeA('number');
        //this is how mocha knows about async function
        done();
    });
})
it('should square a number', () => {
    var res = utils.square(4);
    // if (res !== 16) {
    //     throw new Error(`Expect 16, but got ${res}`);
    // }
    expect(res).toBe(16).toBeA('number');
});

it('should async square a number', (done)=> {
    utils.asyncSquare(4, (square) => {
        expect(square).toBe(16).toBeA('number')
        done();
    })
});

it('should set firstName and lastName', () => {
    var user = {location: 'Auckland', age: 25};
    var res = utils.setName(user, 'Carmen Liu');

    expect(res).toInclude({
        firstName: 'Carmen',
        lastName: "Liu"
    });
});

it('should expect some value', () => {
    expect(12).toNotBe(10);
    expect({name:"carmen"}).toNotEqual({name:"carmen2"});
    expect([2,3,4]).toExclude(5);
    expect({
        name: "carmen",
        age:32,
        location: "chengdu"
    }).toExclude({
        age:50
    })
});
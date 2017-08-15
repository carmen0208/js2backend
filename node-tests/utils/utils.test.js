const utils = require('./utils');

it('should add two numbers', () => {
    var res = utils.add(33,11);
    if (res !== 44) {
        throw new Error(`Expect 44, but got ${res}`);
    }
    // 
});

it('should square a number', () => {
    var res = utils.square(4);
    if (res !== 16) {
        throw new Error(`Expect 16, but got ${res}`);
    }
});
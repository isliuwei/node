console.log('**** this is module demo ****');

const testVar = 'testVar';

function testFn () {
    console.log('testFn');
}

module.exports.expVar = testVar;
module.exports.expFn = testFn;
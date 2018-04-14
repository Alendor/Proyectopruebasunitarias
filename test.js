var assert = require('chai').assert;
var romanize= require('./romanize');

describe('Pruebaromanize', function(){
    var testsverify=[
        {args: 1, expected: "I"},
        {args: 5, expected: "V"},
        {args: 10, expected: "X"},
        {args: 20, expected: "XX"},
        {args: 50, expected: "L"},
        {args: 100, expected: "C"},
        {args: 3, expected: "III"},
        {args: 58, expected: "LVII"},
        {args: 60, expected: "LX"}
    ];

    testsverify.forEach(function (test) { 
        it(' Convertidos de manera correcta ' + test.args , function () 
        { var res = romanize.romanize(test.args);
             assert.equal(res, test.expected); 
        });
    });


   
});
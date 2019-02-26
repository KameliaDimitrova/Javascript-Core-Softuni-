let isOddOrEven=require('../OddOrEven');
let expect=require('chai').expect;
let assert=require('chai').assert;

describe('if it is OK',function(){
    it('should return undefine if we pass a number',function(){
        let number=20;

        let expected=isOddOrEven(number);

        expect(expected).to.equal(undefined);
    });
});

describe('if it is OK',function(){
    it('should return odd number',function(){
        let number='aaa';

        let expected=isOddOrEven(number);

        expect(expected).to.equal('odd');
    });
});

describe('if it is OK',function(){
    it('should return even number',function(){
        let number='aa';

        let expected=isOddOrEven(number);

        expect(expected).to.equal('even');
    });
});
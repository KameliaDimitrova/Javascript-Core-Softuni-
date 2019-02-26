let mathEnforcer=require('../MathEnforcer');
let expect=require('chai').expect;
let assert=require('chai').assert;

describe('if it is OK',function(){
    it('should return value number',function(){
        let num=20;

        let expected=mathEnforcer.addFive(num);

        expect(expected).to.equal(25);
    });
});

describe('if it is OK',function(){
    it('should return value number',function(){
        let num=20.1;

        let expected=mathEnforcer.addFive(num);

        expect(expected).to.equal(25.1);
    });
});


describe('if it is OK',function(){
    it('should return undefine ',function(){
        let num='aaa';

        let expected=mathEnforcer.addFive(num);

        expect(expected).to.equal(undefined);
    });
});

describe('if it is OK',function(){
    it('should return value number',function(){
        let num=-5;

        let expected=mathEnforcer.addFive(num);

        expect(expected).to.equal(0);
    });
});

describe('if it is OK',function(){
    it('should return undefine if we pass a number',function(){
        let num=20;

        let expected=mathEnforcer.subtractTen(num);

        expect(expected).to.equal(10);
    });
});

describe('if it is OK',function(){
    it('should return value',function(){
        let num=20.10;

        let expected=(mathEnforcer.subtractTen(num)).toFixed(2);

        expect(expected).to.equal(10.1.toFixed(2));
    });
});

describe('if it is OK',function(){
    it('should return undefine ',function(){
        let num='aaa';

        let expected=mathEnforcer.subtractTen(num);

        expect(expected).to.equal(undefined);
    });
});

describe('if it is OK',function(){
    it('should return value',function(){
        let num=-20;

        let expected=mathEnforcer.subtractTen(num);

        expect(expected).to.equal(-30);
    });
});


describe('if it is OK',function(){
    it('should return undefine',function(){
        let num1='aaa';
        let num2=3;

        let expected=mathEnforcer.sum(num1,num2);

        expect(expected).to.equal(undefined);
    });
});

describe('if it is OK',function(){
    it('should return undefine',function(){
        let num1=3;
        let num2='aaa';

        let expected=mathEnforcer.sum(num1,num2);

        expect(expected).to.equal(undefined);
    });
});


describe('if it is OK',function(){
    it('should return value number',function(){
        let num1=3;
        let num2=4;

        let expected=mathEnforcer.sum(num1,num2);

        expect(expected).to.equal(7);
    });
});

describe('if it is OK',function(){
    it('should return value number',function(){
        let num1=3.2;
        let num2=4.2;

        let expected=mathEnforcer.sum(num1,num2);

        expect(expected).to.equal(7.4);
    });
});




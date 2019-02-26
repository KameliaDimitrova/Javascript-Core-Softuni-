let lookupChar=require('../CharLookup');
let expect=require('chai').expect;
let assert=require('chai').assert;

describe('if it is OK',function(){
    it('should return undefine',function(){
        let str=3;
        let index=2;

        let expected=lookupChar(str,index);

        expect(expected).to.equal(undefined);
    });
});

describe('if it is OK',function(){
    it('should return undefine ',function(){
        let str='gh';
        let index='dsad';

        let expected=lookupChar(str,index);

        expect(expected).to.equal(undefined);
    });
});

describe('if it is OK',function(){
    it('should return undefine ',function(){
        let str='gh';
        let index=3.4;

        let expected=lookupChar(str,index);

        expect(expected).to.equal(undefined);
    });
});


describe('if it is OK',function(){
    it('should return  Incorrect Index',function(){
        let str='ab';
        let index=2;

        let expected=lookupChar(str,index);

        expect(expected).to.equal('Incorrect index');
    });
});

describe('if it is OK',function(){
    it('should return Incorrect Index',function(){
        let str='ab';
        let index=-2;

        let expected=lookupChar(str,index);

        expect(expected).to.equal('Incorrect index');
    });
});


describe('if it is OK',function(){
    it('should return index of',function(){
        let str='abv';
        let index=2;

        let expected=lookupChar(str,index);

        expect(expected).to.equal('v');
    });
});

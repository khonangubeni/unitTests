  
    // regCount
    describe('The countRegNumber function' , function(){
    it("it should return 'regCount CA 182736' when called with 'CA 182736' " , function(){
        var regCount = countRegNumber('CA 182736')
        assert.equal(regCount, 1);
    });
});
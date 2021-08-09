 //yearsAgo
 describe('The yearsAgo function' , function(){
    it("it should return 'getFullYear' when called with 'getFullYear' " , function(){
        //assert.equal("itemname CY", isFromBellville("CY"),"this should not be true");
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));
    });
});
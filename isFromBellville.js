// isFromBellville
describe('The isFromBellville function' , function(){
it("it should return 'startsWith CY' when called with 'CY' " , function(){
    //assert.equal("itemname CY", isFromBellville("CY"),"this should not be true");
    assert.equal(isFromBellville('CY'), true);
  });
});
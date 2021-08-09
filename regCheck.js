describe('The regCheck function' , function(){
  it("it should return 'DC 55 YU GP', 'GP' when called with 'DC 55 YU GP', 'GP'" , function(){
    //assert.equal("itemname CY", isFromBellville("CY"),"this should not be true");
    assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
});
});
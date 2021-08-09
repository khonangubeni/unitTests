
     //countAllFromTown
     describe('The countAllFromTown function' , function(){
     it("it should return 'countAllFromTown' when called with 'countAllFromTown' " , function(){
        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
        assert.equal(fromStellies, 3)
    });
});
describe('Test my greet function' , function(){
    it("it should return 'Hello Khona' when called with 'Khona' " , function(){
        assert.equal("Hello, Khona", greet("Khona"),"this should not be true");
    });
});
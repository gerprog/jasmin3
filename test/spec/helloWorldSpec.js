describe("Hello World Test", function() {
    it("says hello", function() {
        expect(helloWorld()).toEqual("Hello World!");
    });

    it("contains Hello", function() {
        expect(helloWorld()).toContain("Hello");
    });

});
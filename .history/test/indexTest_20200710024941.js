const sinon = require("sinon");

describe("index.js", function () {
  describe("Array functions", function () {
    describe("append", function () {
      it('appends pet "Odie" to the end of the pets array', function () {
        expect(append).to.have.ordered.members([
          "Milo",
          "Otis",
          "Garfield",
          "Odie",
        ]);
      });
    });

    describe("prepend", function () {
      it("prepends a pet to the beginning of the pets array", function () {
        expect(prepend).to.have.ordered.members([
          "Odie",
          "Milo",
          "Otis",
          "Garfield",
        ]);
      });
      //prepend is a predefined method in mocha; NOT to be confused with the first argument of describe
      //going to research to.have.ordered, but I'm pretty sure it's pre defined as well
    });

    describe("removeLast()", function () {
      it("removes the last pet from the pets array", function () {
        expect(removeLast)
          .to.have.ordered.members(["Milo", "Otis"])
          .and.to.not.include("Garfield");
      });
    });

    describe("removeFirst()", function () {
      it("removes the First pet from the pets array", function () {
        expect(removeFirst)
          .to.have.ordered.members(["Otis", "Garfield"])
          .and.to.not.include("Milo");
      });
    });
  });
});

// jshint esversion: 8
describe("Candy", function () {

    describe("When someone removes 20 candies from a bin of 510 gumball candies", function() {
        var gumball;
        beforeEach(function () {
            gumball = new Candy("Gumball", 510);
        });

        it(`there should be 490 candies left in the bin.`, function () {
            gumball.removeCandy(20);
            expect(gumball.total).toEqual(490);
        });    
    });

    describe("When an employee adds 600 candies to a bin (of Caramels) that has 4 candies in it ", function() {
        var caramel;
        beforeEach(function () {
            caramel = new Candy("Caramel", 4);
        });

        it(`there should be 604 candies in the bin.`, function () {
            caramel.addCandy(600);
            expect(caramel.total).toEqual(604);
        });    
    });
    
    describe("Removing gumball candies from a given bin containing both gumballs and camarels", function() {
        var caramel;
        beforeEach(function () {
            gumballCandy = new Candy("Caramel", 420);
            caramelCandy = new Candy("Caramel", 50);
        });

        it(`should not change the quantity of camarels in the bin`, function () {
            gumballCandy.removeCandy(50);
            expect(caramelCandy.total).toEqual(50);
        });    
    });
});
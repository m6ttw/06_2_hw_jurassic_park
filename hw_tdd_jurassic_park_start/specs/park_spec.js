const assert = require("assert");
const Park = require("../models/park.js");
const Dinosaur = require("../models/dinosaur.js");

describe("Park", function() {

	let dinosaur1;
	let dinosaur2;
	let dinosaur3;
	let dinosaur4;
	let park;

	beforeEach(function () {
		dinosaur1 = new Dinosaur("T-rex", "Carnivore", 50)
		dinosaur2 = new Dinosaur("Brachiosaurus", "Herbivore", 25)
		dinosaur3 = new Dinosaur("Triceratops", "Herbivore", 30)
		dinosaur4 = new Dinosaur("Velociraptor", "Carnivore", 40)
		park = new Park("Jurassic Park", 550, []);
	})

	it("should have a name", function() {
		const actual = "Jurassic Park";
		assert.strictEqual(actual, park.name);
	});

	it("should have a ticket price", function() {
		const actual = 550;
		assert.strictEqual(actual, park.ticketPrice);
	});

	it("should have a collection of dinosaurs", function() {
		const actual = [];
		assert.deepStrictEqual(actual, park.dinosaurCollection)
	});

	it("should be able to add a dinosaur to its collection", function() {
		park.addDinosaur(dinosaur1);
		const expected = [dinosaur1];
		assert.deepStrictEqual(park.dinosaurCollection, expected)
	});

	it("should be able to remove a dinosaur from its collection", function() {
		park.removeDinosaur(dinosaur1);
		const expected = [];
		assert.deepStrictEqual(park.dinosaurCollection, expected)
	});

	it("should be able to find the dinosaur that attracts the most visitors");

	it("should be able to find all dinosaurs of a particular species");

	it("should be able to calculate the total number of visitors per day");

	it("should be able to calculate the total number of visitors per year");

	it("should be able to calculate total revenue for one year");

});

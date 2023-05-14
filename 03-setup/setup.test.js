let animals = ['elephant', 'zebra', 'bear', 'dog'];

beforeAll(() => {
	console.log("BEFORE ALL");
	animals = ['elephant', 'zebra', 'bear', 'dog'];
})

describe("animals array", () => {
	
	beforeEach(() => {
		console.log("BEFORE EACH");
		animals = ['elephant', 'zebra', 'bear', 'dog'];
	})

	afterEach(() => {
		console.log("AFTER EACH");
		animals = ['elephant', 'zebra', 'bear', 'dog'];
	})

	afterAll(() => {
		console.log("AFTER ALL");
		animals = ['elephant', 'zebra', 'bear', 'dog'];
	})

	it("should add animals to end of array", () => {
		animals.push('cat');
		expect(animals[animals.length - 1]).toBe('cat');
	});

	it("should add animals to beginning of array", () => {
		animals.unshift('monkey');
		expect(animals[0]).toBe('monkey');
	});

	it("should have initial length of 4", () => {
		expect(animals.length).toBe(4);
	})
});

describe("testing something else", () => {
	it("true should be truthy", () => {
		expect(true).toBeTruthy();
	})
})
const Plane = require('./plane');
const Airport = require('./airport');

describe('Check if Plane and Airport class is working', () => {

	const testPlane = new Plane('sprint fly');
    const testairport = new Airport('Internation Airport');

	test('Plane exists', () => {
		expect(testPlane.name).toBe('sprint fly');
	})
    test('has a products', () => {
		testairport.addplanes(testPlane.name);

        expect(Array.isArray(testairport.planes)).toBeTruthy();
		expect(testairport.planes.length).toBe(1)
		expect(testairport.planes[0]).toBe('sprint fly')
	})
})
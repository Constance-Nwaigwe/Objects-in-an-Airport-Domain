const Bags = require('./index');

describe('Check if bag class is working', () => {

	const testbags = new Bags('1a2B');

	test('has a tag', () => {
		expect(testbags.tag).toBe('1a2B');
	})
    test('has a products', () => {
		testbags.addproducts("ToothPaste");
        testbags.addproducts("Shampoo");
        testbags.addproducts("Conditioner");

        expect(Array.isArray(testbags.products)).toBeTruthy();
		expect(testbags.products.length).toBe(3)
		expect(testbags.products[0]).toBe('ToothPaste')
        expect(testbags.products[1]).toBe('Shampoo')
        expect(testbags.products[2]).toBe('Conditioner')
	})
})
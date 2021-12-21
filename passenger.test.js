const Bags = require('./index');
const Passenger = require('./passenger');

describe('Check if bag class is working', () => {

	const testbags = new Bags('1a2B');
    const testbags2 = new Bags('H78G');
    const testpass = new Passenger('Jane Doe', 'G17')

	test('bag has a tag', () => {
		expect(testbags.tag).toBe('1a2B');
        expect(testbags2.tag).toBe('H78G');
	})
    test('has a products', () => {
		testpass.addbags(testbags.tag)
        testpass.addbags(testbags2.tag)

        expect(Array.isArray(testpass.bags)).toBeTruthy();
		expect(testpass.bags.length).toBe(2)
		expect(testpass.bags[0]).toBe('1a2B')
        expect(testpass.bags[1]).toBe('H78G')
	})
})
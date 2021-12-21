const Plane = require('./plane');
const Passenger = require('./passenger');

describe('Check if Plane and passenger class is working', () => {

    const testpass = new Passenger('Jane Doe', 'G17')
    const testpass2 = new Passenger('Jake Doe', 'H17')
    const testplane = new Plane('sprint fly', 487)

	test('Passenger has name and ticket nummber', () => {
		expect(testpass.name).toBe('Jane Doe');
        expect(testpass2.name).toBe('Jake Doe');
        expect(testpass.ticketnum).toBe('G17');
        expect(testpass2.ticketnum).toBe('H17');
	})
    test('Check if passengers are added to plane', () => {
		testplane.addpassengers(testpass.name)
        testplane.addpassengers(testpass2.name)

        expect(Array.isArray(testplane.passengers)).toBeTruthy();
		expect(testplane.passengers.length).toBe(2)
		expect(testplane.passengers[0]).toBe('Jane Doe')
        expect(testplane.passengers[1]).toBe('Jake Doe')
	})
})
class Plane {
    constructor(name, passengernum) {
        this.name = name
        this.passengernum = passengernum
        this.passengers = []
    }
    addpassengers(pass){
        this.passengers.push(pass);
    }
}

module.exports = Plane;
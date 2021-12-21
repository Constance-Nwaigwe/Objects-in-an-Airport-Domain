class Airport {
    constructor(name) {
        this.name = name
        this.planes = []
    }
    addplanes(plane){
        this.planes.push(plane);
    }
}

module.exports = Airport;
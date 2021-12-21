class Passenger {
    constructor(name, ticketnum) {
        this.name = name
        this.ticketnum = ticketnum
        this.bags = []
    }
    addbags(bagtag){
        this.bags.push(bagtag);
    }
}

module.exports = Passenger;
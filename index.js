class Bags {
    constructor(tagnum) {
        this.tag = tagnum
        this.products = []
    }
    addproducts(pro){
        this.products.push(pro);
    }
}

module.exports = Bags;
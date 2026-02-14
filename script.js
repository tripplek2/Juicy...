// Juice constructor

function Juice (name, price, size, flavour) {
    this.name = name;
    this.price = price;
    this.size = size;
    this.flavour = flavour;
    this.isAvailable = true;
}

// Juice manager

function JuiceManager() {
    this.juices = this.loadFromStorage();
    this.currentId = 0;
}

// Storage methods


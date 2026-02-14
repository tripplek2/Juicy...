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

JuiceManager.prototype.saveToStorage = function() {
    localStorage.setItem("juicedata", JSON.stringify(this.juices));
}

JuiceManager.prototype.loadFromStorage = function() {
    const savedData = localStorage.getItem("juiceData");
    return savedData ? JSON.parse(savedData) :{};
}

JuiceManager.prototype.loadFromStorage = function() {
    const savedId = localStorage.getItem("juiceCurrentId");
    return saveId ? parseInt(saveId) : 0;
}

// Juice production

JuiceManager.prototype.addJuice = function(juice) {
    this.currentId++;
    juice.id = this.currentId;
    this.juices[juice.id] = juice;
    this.saveToStorage();
};

// Availability of the juice

JuiceManager.prototype.toggleAvailability = function(id) {
    if (this.juices[id]) {
        this.juices[id].isAvailable = !this.juices[id].Available;
        this.saveToStorage();
    }
}

// Deleting the juice

JuiceManager.prototype.deleteJuice = function(id) {
    if (this.juices[id]) {
        delete this.juices[id];
        this.saveToStorage();
        return true;
    }
}

// UI and DOM manipulation

// Rendering all juices

function renderJuices() {
    const juiceListEl = document.getElementById("juice-list");
    if (!juiceListEl) return;
    juiceListEl.innerHTML = "";

    // Converting juices obj to array
    const juiceArray = Object.values(manager.juices);

    // Updating total count
    const totalJuicesEl = document.getElementById("Total-juices");
    if (totalJuicesEl) {
        totalJuicesEl.textContent = juicesArray.length;
    }

    // Notification message
    if (juicesArray.length === 0) {
        juiceListEl.innerHTML = "<p>No juices!</p>";
        return;
    }

    // Looping through each juiice and creating a card

    juicesArray.forEach((juice) => {
        const div = document.createElement("div");
        div.classList.add("juice-card");

        div.innerHTML = `<h3>${juice.name}</h3>
                    <p>price:${juice.price}</p>
                    <p>Size:${juice.size}</p>
                    <p>Flavour:${juice.flavour}</p>
                    <p>Status:${juice.isAvailable ? "Available" : "Not Available"}</p>
                    <button onclick="manager.toggleAvailability(${juice.id});

                    <button>
                    <button onclick="manager.deleteJuice(${juice.id}); renderJuices();">
                     Delete
                    </button> `;
                    
        juiceListEl.appendChild(div);

    });

}

// Form handling

function handleAddJuice(event) {
    event.preventDefault();

    // Get input values
    const nameInput = document.getElementById("name");
    const priceInput = document.getElementById("price");
    const sizeInput = document.getElementById("size");
    const flavourInput = document.getElementById("flavour");

    //  Validation

    if (!nameInput || !priceInput.value || !sizeInput.value || !flavourInput) {
        alert("please fill in all fields");
        return;
    }
}

// Creating new juice obj

const newJuice = new Juice(
    nameInput.value,
    parseFloat(priceInput.value),
    sizeInput.value,
    flavourInput.value
);

manager.addJuice(newJuice);
renderJuices();





function showSection(id) {
    document.querySelectorAll(".section").forEach(sec => {
        sec.classList.remove("active");
    });
    document.getElementById(id).classList.add("active");
}

// Theme Toggle
function toggleTheme() {
    document.body.classList.toggle("dark");
}

// Dashboard Logic
let orders = 0;
let customers = 0;

function updateStats() {
    orders += Math.floor(Math.random() * 5);
    customers += Math.floor(Math.random() * 3);

    document.getElementById("orders").innerText = orders;
    document.getElementById("customers").innerText = customers;
}

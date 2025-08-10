let totalGDP = 0;
let autoGDP = 0;

// Update display
function updateGDPDisplay() {
    document.getElementById("totalGDP").textContent = totalGDP;
    document.getElementById("autoGDP").textContent = autoGDP;
}

// Manual button click
document.getElementById("gdpButton").addEventListener("click", function() {
    totalGDP += 1;
    updateGDPDisplay();
});

// Auto GDP every second
setInterval(function() {
    totalGDP += autoGDP;
    updateGDPDisplay();
}, 1000);

// Purchases (all ADD GDP now)
document.querySelectorAll(".purchase").forEach(button => {
    button.addEventListener("click", function() {
        let cost = parseInt(this.getAttribute("data-cost"));
        let gdpIncrease = parseInt(this.getAttribute("data-gdp"));
        
        // Instead of subtracting, we add cost to GDP instantly
        totalGDP += cost;
        autoGDP += gdpIncrease;

        updateGDPDisplay();
    });
});

updateGDPDisplay();

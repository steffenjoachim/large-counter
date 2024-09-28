const btn = document.querySelector("button");
const main = document.querySelector("main");
let count = 0;

btn.addEventListener("click", reset);

// Event listener for mouse clicks on the main element
main.addEventListener("click", increment);

// Event listener for keydown events (Space or Enter)
document.addEventListener("keydown", function (e) {
    if (e.code === "Space" || e.code === "Enter") {
        increment();
    }
});

// Increment function to update the count and display it
function increment() {
    count += 1;
    document.querySelector(".big-number").innerHTML = count;

    // Calculate new width based on count
    let newWidth;

    // If count is a multiple of 100, set width to 100%
    if (count > 100 && count % 100 === 0) {
        newWidth = 100; // Set to 100% for multiples of 100
    } else if (count > 100) {
        newWidth = count % 100; // For counts greater than 100, use the remainder
    } else {
        newWidth = count; // For counts 1 to 100, use the count itself
    }

    // Update the width of the pseudo-element
    main.style.setProperty('--bg-width', `${newWidth}%`);
}

// Reset function to set the count back to 0 and reset background
function reset() {
    count = 0;
    document.querySelector(".big-number").innerHTML = count;
    main.style.setProperty('--bg-width', '0%'); // Reset width to 0% with transition
}
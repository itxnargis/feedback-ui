const ratingEls = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");
const containerEl = document.getElementById("container");

let selectedRating = "";

ratingEls.forEach((ratingEl) => {
    ratingEl.addEventListener("click", (event) => {
        removeActive();
        selectedRating = ratingEl.innerText;
        event.target.classList.add("active")
        event.target.parentNode.classList.add("active")
    });
});

btnEl.addEventListener("click", () => {
    if (selectedRating !== "") {
        containerEl.innerHTML = `<strong>Thank you!</strong>
        <br>
        <br>
        <strong>feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support.</p>
        `;
    }
});

function removeActive() {
    ratingEls.forEach((ratingEl) => {
        ratingEl.classList.remove("active");
    });
}
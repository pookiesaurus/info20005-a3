console.log("search.js loaded!");

// open advanced search form
function toggleAdvancedSearch() {
    const advancedSearchForm = document.getElementsByClassName("advanced-search-container")[0];
    if (advancedSearchForm.style.display === "none" || advancedSearchForm.style.display === "") {
        advancedSearchForm.style.display = "block";
    } else {
        advancedSearchForm.style.display = "none";
    }
}



// price filter slider code - adapted from Danish Laeeq at https://codepen.io/danishlaeeq/pen/OJvGmaY on 3/6/2025
const rangeInput = document.querySelectorAll(".slider input"); 
const priceInput = document.querySelectorAll(".price-input input");
const range = document.querySelector(".slider-container .progress");

let priceGap = 50;

priceInput.forEach(input => {
    input.addEventListener("input", e => {
        let minPrice = parseInt(priceInput[0].value);
        let maxPrice = parseInt(priceInput[1].value);

        if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max) {
            if (e.target.className === "input-min") {
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / 1500) * 100) + "%";
            } else {
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / 1500) * 100 + "%";
            }
        }
    });
});

rangeInput.forEach(input => {
    input.addEventListener("input", e => {
        let minVal = parseInt(rangeInput[0].value);
        let maxVal = parseInt(rangeInput[1].value);

        if ((maxVal - minVal) < priceGap) {
            if (e.target.className === "price-min") {
                rangeInput[0].value = maxVal - priceGap;
            } else {
                rangeInput[1].value = minVal + priceGap;
            }
        } else {
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / 1500) * 100) + "%";
            range.style.right = 100 - (maxVal / 1500) * 100 + "%";
        }
    });
});

// Initialise the progress bar on load
let minVal = parseInt(rangeInput[0].value);
let maxVal = parseInt(rangeInput[1].value);
priceInput[0].value = minVal;
priceInput[1].value = maxVal;
range.style.left = ((minVal / 1500) * 100) + "%";
range.style.right = 100 - (maxVal / 1500) * 100 + "%";


// Search functionality
const searchInput = document.getElementById("search");
console.log("search.js loaded!");

let ignoreInputEvents = false;

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

console.log("rangeInput[0]", rangeInput[0]);
console.log("type:", rangeInput[0].type);
console.log("value before setting:", rangeInput[0].value);

let priceGap = 50;

priceInput.forEach(input => {
    input.addEventListener("input", e => {
        if (ignoreInputEvents) return;

        let minPrice = parseInt(priceInput[0].value);
        let maxPrice = parseInt(priceInput[1].value);

        if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max) {
            if (e.target.classList.contains("input-min")) {
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
        if (ignoreInputEvents) return;

        let minVal = parseInt(rangeInput[0].value);
        let maxVal = parseInt(rangeInput[1].value);

        if ((maxVal - minVal) < priceGap) {
            if (e.target.classList.contains("price-min")) {
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


function clearSearchForm() {
    ignoreInputEvents = true;

    // Reset price sliders and inputs
    priceInput[0].value = 0;
    priceInput[1].value = 1500;

    // rangeInput[0].value = 100;
    // rangeInput[1].value = 500;

    // console.log(rangeInput[0]); // price-min input element
    // console.log(rangeInput[1]); // price-max input element

    range.style.left = "0%";
    range.style.right = "0%";

    // Clear other inputs in advanced search if any
    const advancedInputs = document.querySelectorAll(".advanced-search-container input, .advanced-search-container select");
    advancedInputs.forEach(input => {
        if (input.type === "checkbox") {
            input.checked = false;
        } else if (input.type === "radio") {
            input.checked = false;
        } else if (input !== priceInput[0] && input !== priceInput[1]) {
            input.value = "";
        }
    });
    
    
    const sortDefault = document.querySelector("input[type='radio'][value='relevance']");
    sortDefault.checked = true;

    ignoreInputEvents = false;
}

// Search functionality
function performSearch() {
    console.log("performSearch called");
    const categories =  Array.from(document.querySelectorAll("input[name='category']:checked")).map(input => input.value);
    const minPrice = parseInt(priceInput[0].value);
    const maxPrice = parseInt(priceInput[1].value);
    const sort = document.querySelector("input[name='sort']:checked").value;
    const searchQuery = document.querySelector("#search").value.trim();

    // Construct the search URL
    let searchURL = `products.html?categories=${encodeURIComponent(categories.join(','))}&min=${minPrice}&max=${maxPrice}&sort=${sort}&search=${encodeURIComponent(searchQuery)}`;

    // Redirect to the search results page
    window.location.href = searchURL;
}

// Event listeners for search form
const searchInput = document.getElementById("search");

searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent form submission
        performSearch(); // Call the search function
    }
});
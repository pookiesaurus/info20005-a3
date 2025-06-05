window.addEventListener('DOMContentLoaded', () => {
    getSearchResults();
});

// Functions to check if a product matches the selected categories, price range, and search query

function matchesCategory(product, categories) {
    if (categories.length === 0 || (categories.length === 1 && categories[0] === '')) {
        return true;
    }
    return categories.includes(product.category);
}

function matchesPrice(product, minPrice, maxPrice) {
    return product.price >= minPrice && product.price <= maxPrice;
}

function matchesSearch(product, search) {
    const searchLower = search.toLowerCase();
    const nameLower = product.item.toLowerCase();
    const descriptionLower = product.description.toLowerCase();

    return nameLower.includes(searchLower) || descriptionLower.includes(searchLower);
}

// Functions to sort products based on the selected sort option
function sortByPriceAsc(a, b) {
    return a.price - b.price;
}

function sortByPriceDesc(a, b) {
    return b.price - a.price;
}

function sortByNameAsc(a, b) {
    return a.item.localeCompare(b.item);
}

function sortByNameDesc(a, b) {
    return b.item.localeCompare(a.item);
}

// Inject filtered and sorted products into the results container
function addProductsToPage(products) {
    const resultsContainer = document.querySelector('.products-container');
    resultsContainer.innerHTML = '';
    if (products.length === 0) {
        resultsContainer.innerHTML = '<p>No products found matching your criteria.</p>';
        return;
    } 
    for (let product of products) {
        let productCategory = formatCategoryTitle(product.category);


        const productElement = `
            <a href="" class="product-card-link sans-serif">
                <div class="product-card">
                    <span class="product-category">${productCategory}</span>
                    <img src="${product.image}" alt="Product Image" class="product-image">
                    <div class="product-details">
                        <h2 class="semibold">${product.item}</h2>
                        <p class="product-price regular">from $${product.price.toFixed(2)}</p>
                    </div>
                </div>
            </a>
        `;

        resultsContainer.insertAdjacentHTML('beforeend', productElement);
    }
}


function getSearchResults() {
    const url = new URL(window.location.href);
    const params = url.searchParams;
    
    // Convert categories to an array, handling cases where no categories are selected
    const categories = params.get('categories')?.split(',') || [];
    
    const minPrice = parseFloat(params.get('min'));
    const maxPrice = parseFloat(params.get('max'));
    const sort = params.get('sort');
    const search = params.get('search');

    console.log('Categories:', categories);
    console.log('Min Price:', minPrice);
    console.log('Max Price:', maxPrice);
    console.log('Sort:', sort);
    console.log('Search:', search);

    // Change the page title based on search query
    if (search) {
        document.title = `Search Results for "${search}" - Sweet Mayada Cakes`;
    } else if (categories.length === 0 || (categories.length === 1 && categories[0] === '')) {
        document.title = "All Products - Sweet Mayada Cakes";
    } else if (categories.length === 1) {
        let categoryTitle = formatCategoryTitle(categories[0]);
        document.title = `${categoryTitle} - Sweet Mayada Cakes`;
    }

    // Prefill the inputs with query parameters
    if (search) {
        document.querySelector("#search").value = search;
    }
    const categoryInputs = document.querySelectorAll("input[name='category']");
    for (let input of categoryInputs) {
        if (categories.includes(input.value)) {
            input.checked = true;
        } else {
            input.checked = false;
        }
    }
    const sortInputs = document.querySelectorAll("input[name='sort']");
    for (let input of sortInputs) {
        if (input.value === sort) {
            input.checked = true;
        } else {
            input.checked = false;
        }
    }
    
    document.querySelector(".input-min").value = minPrice;
    document.querySelector(".input-max").value = maxPrice;
    document.querySelector(".price-min").value = minPrice;
    document.querySelector(".price-max").value = maxPrice;
    range.style.left = ((minPrice / 1500) * 100) + "%";
    range.style.right = 100 - (maxPrice / 1500) * 100 + "%";

    // Filter products based on search criteria
    let filteredProducts = [];

    for (let product of products) {
        if (matchesCategory(product, categories) &&
            matchesPrice(product, minPrice, maxPrice) &&
            matchesSearch(product, search)) {
            filteredProducts.push(product);
        }
    }

    // Sort products based on the selected sort option
    if (sort === 'price-asc') {
        filteredProducts.sort(sortByPriceAsc);
    } else if (sort === 'price-desc') {
        filteredProducts.sort(sortByPriceDesc);
    } else if (sort === 'name-asc') {
        filteredProducts.sort(sortByNameAsc);
    } else if (sort === 'name-desc') {
        filteredProducts.sort(sortByNameDesc);
    }

    // Display the filtered and sorted products
    addProductsToPage(filteredProducts)


}

function formatCategoryTitle(word) {
    return word
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
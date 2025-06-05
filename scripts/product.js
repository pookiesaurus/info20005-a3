console.log('Product script loaded');
const addToCartBtn = document.querySelector('#add-to-cart');

function showAddedToCartPopup() {
    const popup = document.getElementById('added-to-cart-popup');
    
    // Make popup visible
    popup.classList.remove('hidden');
    // Trigger fade-in effect
    setTimeout(() => popup.classList.add('show'), 10);

    // Hide after 3 seconds
    setTimeout(() => {
        popup.classList.remove('show');
        // Hide completely after fade-out transition
        setTimeout(() => popup.classList.add('hidden'), 300);
    }, 3000);
}

function addToCart() {
    // Get product info and selected options here

    const url = new URL(window.location.href);
    const params = url.searchParams;
    const productId = parseInt(params.get('id'));
    const product = products.find(p => p.id === productId);

    const options = {};
    document.querySelectorAll('.custom-dropdown input[type="hidden"]').forEach(input => {
        options[input.name] = input.value;
    });

    const priceText = document.getElementById('product-price').textContent;
    const price = parseFloat(priceText.replace('$', ''));

    const cartItem = {
        id: product.id,
        name: product.item,
        options,
        price,
        quantity: 1,
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));

    // alert('Added to cart!');
    showAddedToCartPopup()
}

// Function to check if all dropdowns have a selection
function checkAllDropdownsSelected() {
    const allDropdowns = document.querySelectorAll('.custom-dropdown input[type="hidden"]');
    const allSelected = Array.from(allDropdowns).every(input => input.value.trim() !== '');
    addToCartBtn.disabled = !allSelected;
}

function recalculatePrice(product) {
    const variant = variants.find(v => v.category === product.category);
    let price = product.price;

    Object.keys(variant).forEach(key => {
        if (key === 'category') return;

        const input = document.getElementById(`${key}-value`);
        const selectedValue = input?.value;

        if (selectedValue) {
            const selectedOption = variant[key].find(opt => opt.value === selectedValue);
            if (selectedOption) {
                price *= selectedOption.priceModifier;
            }
        }
    });

    document.getElementById('product-price').textContent = `$${price.toFixed(2)}`;
}



function generateDropdowns(product) {
    const variant = variants.find(v => v.category === product.category);

    const dropdownContainer = document.querySelector('.options');

    dropdownContainer.innerHTML = ''; // Clear existing content

    Object.keys(variant).forEach(key => {
        if (key === 'category') return;

        // Create the custom-dropdown container
        const dropdown = document.createElement('div');
        dropdown.classList.add('custom-dropdown');
        dropdown.id = `${key}-dropdown`;

        // Selected option div
        const selected = document.createElement('div');
        selected.classList.add('selected-option');
        selected.textContent = `Select a ${key}`;

        // Dropdown options list
        const optionsList = document.createElement('ul');
        optionsList.classList.add('dropdown-options');

        variant[key].forEach(option => {
            const li = document.createElement('li');
            li.dataset.value = option.value;
            li.textContent = option.label;
            optionsList.appendChild(li);
        });

        // Hidden input
        const hiddenInput = document.createElement('input');
        hiddenInput.type = 'hidden';
        hiddenInput.name = key;
        hiddenInput.id = `${key}-value`;

        // Append children
        dropdown.appendChild(selected);
        dropdown.appendChild(optionsList);
        dropdown.appendChild(hiddenInput);

        dropdownContainer.appendChild(dropdown);

        // Event listeners:
        selected.addEventListener('click', () => {
            const isVisible = optionsList.style.display === 'block';
            document.querySelectorAll('.dropdown-options').forEach(opt => opt.style.display = 'none');
            optionsList.style.display = isVisible ? 'none' : 'block';
        });

        optionsList.addEventListener('click', (e) => {
            const li = e.target.closest('li');
            if (li) {
                selected.textContent = li.textContent;
                hiddenInput.value = li.dataset.value;
                optionsList.style.display = 'none';

                checkAllDropdownsSelected();
                recalculatePrice(product);
            }
        });

        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target)) {
                optionsList.style.display = 'none';
            }
        });
    });
}

function generatePage() {
    const url = new URL(window.location.href);
    const params = url.searchParams;
    const productId = parseInt(params.get('id'));

    const product = products.find(p => p.id === productId);

    const productCategory = product.category;

    document.getElementById('product-name').textContent = product.item;
    document.getElementById('product-price').textContent = `from $${product.price.toFixed(2)}`;

    document.getElementById('mobile-img').src = product.image;
    document.getElementById('desktop-img').src = product.image;

    document.getElementById('product-description').textContent = product.description;

    generateDropdowns(product);


}

window.addEventListener('DOMContentLoaded', generatePage);






// document.querySelectorAll('.custom-dropdown').forEach(dropdown => {
//     const selected = dropdown.querySelector('.selected-option');
//     const options = dropdown.querySelector('.dropdown-options');
//     const hiddenInput = dropdown.querySelector('input[type="hidden"]');

//     selected.addEventListener('click', () => {
//         // Toggle dropdown
//         const isVisible = options.style.display === 'block';
//         document.querySelectorAll('.dropdown-options').forEach(opt => opt.style.display = 'none');
//         options.style.display = isVisible ? 'none' : 'block';
//     });

//     options.addEventListener('click', (e) => {
//         const li = e.target.closest('li');
//         if (li) {
//         const value = li.getAttribute('data-value');
//         selected.textContent = li.textContent;
//         hiddenInput.value = value;
//         options.style.display = 'none';

//         checkAllDropdownsSelected();
//         }
//     });

//     // Close dropdown if clicked outside
//     document.addEventListener('click', (e) => {
//         if (!dropdown.contains(e.target)) {
//         options.style.display = 'none';
//         }
//     });
// });

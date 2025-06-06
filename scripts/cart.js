function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function updateCheckoutButton() {
    const cart = getCart();
    const checkoutButton = document.querySelector(".checkout-button");

    if (!cart || cart.length === 0) {
        checkoutButton.disabled = true;
        checkoutButton.classList.add("disabled");
    } else {
        checkoutButton.disabled = false;
        checkoutButton.classList.remove("disabled");
    }
}

function formatCategoryTitle(word) {
    return word
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

function formatPrice(price) {
  return `$${price.toFixed(2)}`;
}

function removeItem(index) {
    const cart = getCart();
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
    updateCheckoutButton()
}

function displayCart() {
    const cartContainer = document.querySelector(".cart-item");
    const cartHeader = document.querySelector(".cart-items h2");
    const cart = getCart();

    if (!cartContainer || !cartHeader) return; // safety check

    cartContainer.innerHTML = "";
    let subtotal = 0;

    cart.forEach((item, index) => {
        subtotal += item.price;

        const itemHTML = `
        <div class="cart-details" data-index="${index}">
            <div class="cart-img">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-text">
                <p class="item-title">
                    <span class="item-name serif">${item.name}</span>
                    <span class="item-price serif">${formatPrice(item.price)}</span>
                </p>
                ${item.options ? Object.entries(item.options).map(([key, val]) => `<p class="item-variant">${formatCategoryTitle(key)}: ${val}</p>`).join("") : ""}
                <div class="remove-button-container">
                    <button type="button" class="sans-serif remove-btn" onclick="removeItem(${index})">Remove item</button>
                </div>
            </div>
        </div>
        `;
        cartContainer.innerHTML += itemHTML;
    });

    cartHeader.textContent = `Cart (${cart.length} item${cart.length !== 1 ? "s" : ""})`;
    document.getElementById("subtotal").textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById("total").textContent = `$${subtotal.toFixed(2)} + Shipping`;
}

function setupPaymentToggle() {
    const creditCardRadio = document.getElementById('credit-card');
    const paypalRadio = document.getElementById('paypal');
    const cardPaymentSection = document.querySelector('.card-payment');

    if (creditCardRadio.checked) {
      cardPaymentSection.style.display = 'flex';
    } else {
      cardPaymentSection.style.display = 'none';
    }

    creditCardRadio.addEventListener('change', () => {
      cardPaymentSection.style.display = 'flex';
    });

    paypalRadio.addEventListener('change', () => {
      cardPaymentSection.style.display = 'none';
    });
}

const deliveryCosts = {
  standard: 10.00,
  express: 18.95,
  pickup: 0.00
};

const deliveryNames = {
    standard: 'Standard Shipping',
    express: 'Express Shipping',
    pickup: 'Pick up'
};

function getSelectedDeliveryCost() {
    const selected = document.querySelector('input[name="delivery-option"]:checked');
    return selected ? (deliveryCosts[selected.value] || 0) : 0;
}

function getSelectedDeliveryName() {
    const selected = document.querySelector('input[name="delivery-option"]:checked');
    return selected ? (deliveryNames[selected.value] || '') : '';
}

function populateOrderSummary() {
    const cart = getCart();
    const itemsList = document.querySelector('.order-summary .items-list');
    if (!itemsList) return;

    itemsList.innerHTML = '';

    let subtotal = 0;

    cart.forEach(item => {
        subtotal += item.price;

        const optionsHTML = item.options
        ? Object.entries(item.options)
            .map(([key, val]) => `<p class="item-variant">${formatCategoryTitle(key)}: ${val}</p>`)
            .join('')
        : '';

        const itemHTML = `
        <div class="summary-item sans-serif">
            <div class="summary-title">
            <span class="item-name">${item.name}</span>
            <span class="item-price medium">${formatPrice(item.price)}</span>
            </div>
            ${optionsHTML}
        </div>
        `;

        itemsList.insertAdjacentHTML('beforeend', itemHTML);
    });

    // Determine delivery cost and name depending on page
    let deliveryCost = 0;
    let deliveryName = '';

    if (window.location.pathname.includes('checkout.html')) {
        deliveryCost = getSelectedDeliveryCost();
        deliveryName = getSelectedDeliveryName();
    } else if (window.location.pathname.includes('confirmation.html')) {
        const method = localStorage.getItem('shippingMethod');
        const price = parseFloat(localStorage.getItem('shippingPrice'));
        if (method && !isNaN(price)) {
        deliveryCost = price;
        deliveryName = deliveryNames[method] || '';
        }
    }

    if (deliveryName) {
        const deliveryHTML = `
        <div class="summary-item sans-serif">
            <div class="summary-title">
            <span class="item-name">${deliveryName}</span>
            <span class="item-price medium">${formatPrice(deliveryCost)}</span>
            </div>
        </div>
        `;
        itemsList.insertAdjacentHTML('beforeend', deliveryHTML);
    }

    itemsList.insertAdjacentHTML('beforeend', '<div class="separator"></div>');

    const total = subtotal + deliveryCost;
    const totalHTML = `
        <div class="summary-total sans-serif">
        <span class="total-label bold">Total</span>
        <span class="total-price medium">${formatPrice(total)}</span>
        </div>
    `;
    itemsList.insertAdjacentHTML('beforeend', totalHTML);
}


if (window.location.pathname.includes("cart.html")) {
    displayCart();
    updateCheckoutButton()
}

if (window.location.pathname.includes('checkout.html')) {
      setupPaymentToggle();
      populateOrderSummary();

    const deliveryRadios = document.querySelectorAll('input[name="delivery-option"]');
        deliveryRadios.forEach(radio => {
            radio.addEventListener('change', populateOrderSummary);
    });

    const placeOrderBtn = document.getElementById('place-order-btn');
    if (placeOrderBtn) {
        placeOrderBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const selected = document.querySelector('input[name="delivery-option"]:checked');
        if (selected) {
            localStorage.setItem('shippingMethod', selected.value);
            localStorage.setItem('shippingPrice', deliveryCosts[selected.value]);
        }

        window.location.href = 'confirmation.html';
        });
    }
}

if (window.location.pathname.includes('confirmation.html')) {
      populateOrderSummary();
}

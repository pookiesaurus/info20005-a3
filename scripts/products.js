const products = [
    // Everyday Cakes (1–10)
    {id: 1, item: "Product 1", category: "everyday-cakes", price: 25.00, description: "Description of Product 1", image: "https://wtk-live-public.s3.ap-southeast-2.amazonaws.com/public/Uploads/Jordan-Rondel_Web-final.jpg"},
    {id: 2, item: "Product 2", category: "everyday-cakes", price: 30.00, description: "Description of Product 2", image: "https://placehold.co/600x400.png"},
    {id: 3, item: "Product 3", category: "everyday-cakes", price: 27.50, description: "Description of Product 3", image: "https://placehold.co/600x400.png"},
    {id: 4, item: "Product 4", category: "everyday-cakes", price: 29.00, description: "Description of Product 4", image: "https://placehold.co/600x400.png"},
    {id: 5, item: "Product 5", category: "everyday-cakes", price: 32.00, description: "Description of Product 5", image: "https://placehold.co/600x400.png"},
    {id: 6, item: "Product 6", category: "everyday-cakes", price: 28.50, description: "Description of Product 6", image: "https://placehold.co/600x400.png"},
    {id: 7, item: "Product 7", category: "everyday-cakes", price: 33.00, description: "Description of Product 7", image: "https://placehold.co/600x400.png"},
    {id: 8, item: "Product 8", category: "everyday-cakes", price: 31.00, description: "Description of Product 8", image: "https://placehold.co/600x400.png"},
    {id: 9, item: "Product 9", category: "everyday-cakes", price: 26.50, description: "Description of Product 9", image: "https://placehold.co/600x400.png"},
    {id: 10, item: "Product 10", category: "everyday-cakes", price: 30.00, description: "Description of Product 10", image: "https://placehold.co/600x400.png"},

    // Celebration Cakes (11–20)
    {id: 11, item: "Product 11", category: "celebration-cakes", price: 65.00, description: "Description of Product 11", image: "https://placehold.co/600x400.png"},
    {id: 12, item: "Product 12", category: "celebration-cakes", price: 70.00, description: "Description of Product 12", image: "https://placehold.co/600x400.png"},
    {id: 13, item: "Product 13", category: "celebration-cakes", price: 75.00, description: "Description of Product 13", image: "https://placehold.co/600x400.png"},
    {id: 14, item: "Product 14", category: "celebration-cakes", price: 68.00, description: "Description of Product 14", image: "https://placehold.co/600x400.png"},
    {id: 15, item: "Product 15", category: "celebration-cakes", price: 60.00, description: "Description of Product 15", image: "https://placehold.co/600x400.png"},
    {id: 16, item: "Product 16", category: "celebration-cakes", price: 72.00, description: "Description of Product 16", image: "https://placehold.co/600x400.png"},
    {id: 17, item: "Product 17", category: "celebration-cakes", price: 69.00, description: "Description of Product 17", image: "https://placehold.co/600x400.png"},
    {id: 18, item: "Product 18", category: "celebration-cakes", price: 67.00, description: "Description of Product 18", image: "https://placehold.co/600x400.png"},
    {id: 19, item: "Product 19", category: "celebration-cakes", price: 66.00, description: "Description of Product 19", image: "https://placehold.co/600x400.png"},
    {id: 20, item: "Product 20", category: "celebration-cakes", price: 71.00, description: "Description of Product 20", image: "https://placehold.co/600x400.png"},

    // Wedding Cakes (21–30)
    {id: 21, item: "Product 21", category: "wedding-cakes", price: 200.00, description: "Description of Product 21", image: "https://placehold.co/600x400.png"},
    {id: 22, item: "Product 22", category: "wedding-cakes", price: 220.00, description: "Description of Product 22", image: "https://placehold.co/600x400.png"},
    {id: 23, item: "Product 23", category: "wedding-cakes", price: 210.00, description: "Description of Product 23", image: "https://placehold.co/600x400.png"},
    {id: 24, item: "Product 24", category: "wedding-cakes", price: 230.00, description: "Description of Product 24", image: "https://placehold.co/600x400.png"},
    {id: 25, item: "Product 25", category: "wedding-cakes", price: 250.00, description: "Description of Product 25", image: "https://placehold.co/600x400.png"},
    {id: 26, item: "Product 26", category: "wedding-cakes", price: 240.00, description: "Description of Product 26", image: "https://placehold.co/600x400.png"},
    {id: 27, item: "Product 27", category: "wedding-cakes", price: 255.00, description: "Description of Product 27", image: "https://placehold.co/600x400.png"},
    {id: 28, item: "Product 28", category: "wedding-cakes", price: 270.00, description: "Description of Product 28", image: "https://placehold.co/600x400.png"},
    {id: 29, item: "Product 29", category: "wedding-cakes", price: 245.00, description: "Description of Product 29", image: "https://placehold.co/600x400.png"},
    {id: 30, item: "Product 30", category: "wedding-cakes", price: 235.00, description: "Description of Product 30", image: "https://placehold.co/600x400.png"},

    // Custom Cakes (31–40)
    {id: 31, item: "Product 31", category: "custom-cakes", price: 90.00, description: "Description of Product 31", image: "https://placehold.co/600x400.png"},
    {id: 32, item: "Product 32", category: "custom-cakes", price: 100.00, description: "Description of Product 32", image: "https://placehold.co/600x400.png"},
    {id: 33, item: "Product 33", category: "custom-cakes", price: 95.00, description: "Description of Product 33", image: "https://placehold.co/600x400.png"},
    {id: 34, item: "Product 34", category: "custom-cakes", price: 110.00, description: "Description of Product 34", image: "https://placehold.co/600x400.png"},
    {id: 35, item: "Product 35", category: "custom-cakes", price: 105.00, description: "Description of Product 35", image: "https://placehold.co/600x400.png"},
    {id: 36, item: "Product 36", category: "custom-cakes", price: 98.00, description: "Description of Product 36", image: "https://placehold.co/600x400.png"},
    {id: 37, item: "Product 37", category: "custom-cakes", price: 102.00, description: "Description of Product 37", image: "https://placehold.co/600x400.png"},
    {id: 38, item: "Product 38", category: "custom-cakes", price: 100.00, description: "Description of Product 38", image: "https://placehold.co/600x400.png"},
    {id: 39, item: "Product 39", category: "custom-cakes", price: 97.00, description: "Description of Product 39", image: "https://placehold.co/600x400.png"},
    {id: 40, item: "Product 40", category: "custom-cakes", price: 115.00, description: "Description of Product 40", image: "https://placehold.co/600x400.png"},

    // Cupcakes (41–50)
    {id: 41, item: "Product 41", category: "cupcakes", price: 4.50, description: "Description of Product 41", image: "https://placehold.co/600x400.png"},
    {id: 42, item: "Product 42", category: "cupcakes", price: 4.50, description: "Description of Product 42", image: "https://placehold.co/600x400.png"},
    {id: 43, item: "Product 43", category: "cupcakes", price: 5.00, description: "Description of Product 43", image: "https://placehold.co/600x400.png"},
    {id: 44, item: "Product 44", category: "cupcakes", price: 5.00, description: "Description of Product 44", image: "https://placehold.co/600x400.png"},
    {id: 45, item: "Product 45", category: "cupcakes", price: 4.75, description: "Description of Product 45", image: "https://placehold.co/600x400.png"},
    {id: 46, item: "Product 46", category: "cupcakes", price: 5.25, description: "Description of Product 46", image: "https://placehold.co/600x400.png"},
    {id: 47, item: "Product 47", category: "cupcakes", price: 5.00, description: "Description of Product 47", image: "https://placehold.co/600x400.png"},
    {id: 48, item: "Product 48", category: "cupcakes", price: 5.25, description: "Description of Product 48", image: "https://placehold.co/600x400.png"},
    {id: 49, item: "Product 49", category: "cupcakes", price: 5.00, description: "Description of Product 49", image: "https://placehold.co/600x400.png"},
    {id: 50, item: "Product 50", category: "cupcakes", price: 4.80, description: "Description of Product 50", image: "https://placehold.co/600x400.png"},

    // Other Desserts (51–60)
    {id: 51, item: "Product 51", category: "other-desserts", price: 15.00, description: "Description of Product 51", image: "https://placehold.co/600x400.png"},
    {id: 52, item: "Product 52", category: "other-desserts", price: 12.00, description: "Description of Product 52", image: "https://placehold.co/600x400.png"},
    {id: 53, item: "Product 53", category: "other-desserts", price: 13.00, description: "Description of Product 53", image: "https://placehold.co/600x400.png"},
    {id: 54, item: "Product 54", category: "other-desserts", price: 14.00, description: "Description of Product 54", image: "https://placehold.co/600x400.png"},
    {id: 55, item: "Product 55", category: "other-desserts", price: 16.00, description: "Description of Product 55", image: "https://placehold.co/600x400.png"},
    {id: 56, item: "Product 56", category: "other-desserts", price: 13.50, description: "Description of Product 56", image: "https://placehold.co/600x400.png"},
    {id: 57, item: "Product 57", category: "other-desserts", price: 12.50, description: "Description of Product 57", image: "https://placehold.co/600x400.png"},
    {id: 58, item: "Product 58", category: "other-desserts", price: 14.50, description: "Description of Product 58", image: "https://placehold.co/600x400.png"},
    {id: 59, item: "Product 59", category: "other-desserts", price: 18.00, description: "Description of Product 59", image: "https://placehold.co/600x400.png"},
    {id: 60, item: "Product 60", category: "other-desserts", price: 15.00, description: "Description of Product 60", image: "https://placehold.co/600x400.png"},
];


const variants = [
    {
        category: "everyday-cakes",
        size: [
            {label: "6-inch", value: "6-inch", priceModifier: 1},
            {label: "8-inch", value: "8-inch", priceModifier: 1.2},
            {label: "10-inch", value: "10-inch", priceModifier: 1.4}
        ],
        flavor: [
            {label: "Chocolate", value: "chocolate", priceModifier: 1},
            {label: "Vanilla", value: "vanilla", priceModifier: 1},
            {label: "Lemon", value: "lemon", priceModifier: 1},
            {label: "Carrot", value: "carrot", priceModifier: 1}
        ]
    },
    {
        category: "celebration-cakes",
        size: [
            {label: "8-inch", value: "8-inch", priceModifier: 1},
            {label: "10-inch", value: "10-inch", priceModifier: 1.15},
            {label: "12-inch", value: "12-inch", priceModifier: 1.31}
        ],
        flavor: [
            {label: "Chocolate", value: "chocolate", priceModifier: 1},
            {label: "Vanilla", value: "vanilla", priceModifier: 1},
            {label: "Red Velvet", value: "red-velvet", priceModifier: 1},
            {label: "Funfetti", value: "funfetti", priceModifier: 1}
        ]
    },
    {
        category: "wedding-cakes",
        tier: [
            {label: "2 Tiers", value: "2-tiers", priceModifier: 1},
            {label: "3 Tiers", value: "3-tiers", priceModifier: 1.25},
            {label: "4 Tiers", value: "4-tiers", priceModifier: 1.5}
        ],
        flavor: [
            {label: "Chocolate Mud", value: "chocolate-mud", priceModifier: 1},
            {label: "Vanilla Bean", value: "vanilla-bean", priceModifier: 1},
            {label: "Lemon Elderflower", value: "lemon-elderflower", priceModifier: 1},
            {label: "Raspberry Swirl", value: "raspberry-swirl", priceModifier: 1}
        ]
    },
    {
        category: "custom-cakes",
        shape: [
            {label: "Round", value: "round", priceModifier: 1},
            {label: "Square", value: "square", priceModifier: 1},
            {label: "Heart", value: "heart", priceModifier: 1}
        ],
        flavor: [
            {label: "Chocolate", value: "chocolate", priceModifier: 1},
            {label: "Vanilla", value: "vanilla", priceModifier: 1},
            {label: "Marble", value: "marble", priceModifier: 1},
            {label: "Cookies & Cream", value: "cookies-cream", priceModifier: 1}
        ],
        decoration: [
            {label: "Photo Print", value: "photo-print", priceModifier: 1},
            {label: "Fondant Art", value: "fondant-art", priceModifier: 1},
            {label: "Edible Flowers", value: "edible-flowers", priceModifier: 1}
        ]
    },
    {
        category: "cupcakes",
        quantity: [
            {label: "Box of 6", value: "6", priceModifier: 1},
            {label: "Box of 12", value: "12", priceModifier: 1.95},
            {label: "Box of 24", value: "24", priceModifier: 3.75}
        ],
        flavor: [
            {label: "Chocolate", value: "chocolate", priceModifier: 1},
            {label: "Vanilla", value: "vanilla", priceModifier: 1},
            {label: "Red Velvet", value: "red-velvet", priceModifier: 1},
            {label: "Salted Caramel", value: "salted-caramel", priceModifier: 1}
        ],
        icing: [
            {label: "Buttercream", value: "buttercream", priceModifier: 1},
            {label: "Cream Cheese", value: "cream-cheese", priceModifier: 1}
        ]
    },
    {
        category: "other-desserts",
        size: [
            {label: "Single", value: "single", priceModifier: 1},
            {label: "Box of 4", value: "box-4", priceModifier: 4},
            {label: "Box of 8", value: "box-8", priceModifier: 8}
        ]
    }
];

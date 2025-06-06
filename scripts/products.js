// AI was used to generate the descriptions for the products.

const products = [
    // Everyday Cakes (1–10)
    {id: 1, item: "Velvet Rose Ganache", category: "everyday-cakes", price: 60.00, description: "A rich chocolate cake enveloped in smooth ganache and topped with elegant red rose petals. Perfect for romantic occasions or as a luxurious treat.", image: "https://wtk-live-public.s3.ap-southeast-2.amazonaws.com/public/Uploads/Jordan-Rondel_Web-final.jpg"},
    {id: 2, item: "Classic Cream Cake", category: "everyday-cakes", price: 50.00, description: "A timeless vanilla sponge layered with whipped cream and finished with a light dusting of sugar. Ideal for any celebration or afternoon tea.", image: "https://www.loveitcakes.com.au/cdn/shop/files/image.jpg?v=1687492596&width=1946"},
    {id: 3, item: "Carrot Cake", category: "everyday-cakes", price: 70.50, description: "Moist carrot cake filled with walnuts and spices, topped with a creamy cheese frosting. A classic favorite for all ages.", image: "https://olivesnthyme.com/wp-content/uploads/2023/03/Simple-Carrot-Cake-Recipe-20.jpg"},
    {id: 4, item: "Lemon Cream Tea Cake", category: "everyday-cakes", price: 45.00, description: "Soft lemon sponge layered with tangy lemon cream, offering a refreshing citrus flavor. Perfect for tea parties and light desserts.", image: "https://images.immediate.co.uk/production/volatile/sites/30/2013/05/easy-lemon-layer-cake-hero-e54adca.jpg"},
    {id: 5, item: "Orange Almond Tea Cake", category: "everyday-cakes", price: 45.00, description: "A delicate cake made with fresh orange zest and ground almonds, finished with a light glaze. Great for brunch or as a sweet snack.", image: "https://gerbinos.com.au/cdn/shop/files/G0420_0384_720x.jpg?v=1707113066"},
    {id: 6, item: "Baked Cheesecake", category: "everyday-cakes", price: 80.50, description: "Classic baked cheesecake with a buttery biscuit base and creamy filling. Rich, smooth, and perfect for cheesecake lovers.", image: "https://gerbinos.com.au/cdn/shop/files/G0420_0381_540x.jpg?v=1711947442"},
    {id: 7, item: "Peaches and Cream Cake", category: "everyday-cakes", price: 50.00, description: "Layers of soft sponge, fresh peaches, and whipped cream create a light and fruity dessert. Ideal for summer gatherings.", image: "https://tatyanaseverydayfood.com/wp-content/uploads/2023/08/Peaches-Cream-Cake-Recipe-2.jpg"},

    // Celebration Cakes (11–20)
    {id: 11, item: "Ocean Breeze Bubble Cake", category: "celebration-cakes", price: 280.00, description: "A whimsical cake decorated in aqua and ivory tones with bubble toppers, evoking the calm of the sea. Great for beach-themed parties.", image: "https://brunetticlassico.com.au/wp-content/uploads/2024/11/Monday-Blues.png"},
    {id: 12, item: "Pink Cloud Bubble Cake", category: "celebration-cakes", price: 280.00, description: "Soft pink and white swirls with pastel bubbles make this cake a dreamy centerpiece for birthdays and baby showers.", image: "https://brunetticlassico.com.au/wp-content/uploads/2024/11/Blush.png"},
    {id: 13, item: "Easter Bunny Cake", category: "celebration-cakes", price: 175.00, description: "A festive cake featuring bunny decorations and pastel colors, perfect for Easter celebrations and spring gatherings.", image: "https://brunetticlassico.com.au/wp-content/uploads/2025/02/Brunetti-Classico_250213_92_edit.png"},
    {id: 14, item: "Rosette Barbie Doll Cake", category: "celebration-cakes", price: 168.00, description: "A playful cake shaped like a Barbie doll, adorned with rosette piping. A favorite for children's birthday parties.", image: "https://brunetticlassico.com.au/wp-content/uploads/2024/09/BrunettiClassico_240919_25-e1728602893313.jpg"},
    {id: 15, item: "Rainbow Cake", category: "celebration-cakes", price: 160.00, description: "Vibrant layers of colored sponge with creamy frosting, creating a cheerful and eye-catching dessert for any celebration.", image: "https://bannos.com.au/cdn/shop/files/rainbow-cake-bannos-webp_1445x.webp?v=1710993243"},
    {id: 16, item: "Funfetti Birthday Cake", category: "celebration-cakes", price: 272.00, description: "A vanilla cake filled with colorful sprinkles and topped with buttercream, bringing joy to every birthday party.", image: "https://www.vegkit.com/wp-content/uploads/sites/2/2024/05/vanilla_bday_cake_1.jpg"},
    {id: 17, item: "Rainbow Lollipop Cake", category: "celebration-cakes", price: 169.00, description: "Decorated with rainbow lollipops and bright colors, this cake is a fun treat for kids and the young at heart.", image: "https://www.becbakes.com.au/cdn/shop/products/IMG_4673.jpg?v=1602478625"},
    {id: 18, item: "Jellycat Cake", category: "celebration-cakes", price: 167.00, description: "Inspired by the popular plush toys, this cake features cute animal decorations and soft pastel colors.", image: "https://teakandthyme.com/wp-content/uploads/2024/05/jellycat-birthday-cake-DSC_9332-1x1-1200.jpg"},
    {id: 19, item: "Pretty Pink Bow Cake", category: "celebration-cakes", price: 166.00, description: "A heart-shaped cake adorned with a large pink bow, perfect for romantic occasions or special celebrations.", image: "https://www.flourlane.com.au/cdn/shop/files/pretty-bow-heart-cake-pink-541646_1445x.jpg?v=1710968426"},
    {id: 20, item: "Berry Sweet Valentines Day Cake", category: "celebration-cakes", price: 171.00, description: "A heart-shaped cake with berry flavors and pink decorations, ideal for Valentine’s Day or anniversaries.", image: "https://www.rainbownourishments.com/wp-content/uploads/2024/02/heart-shaped-cake-decorating-tutorial-vegan-raspberry-lemon-1.jpg"},

    // Wedding Cakes (21–30)
    {id: 21, item: "Purple Rosy Wedding Cake", category: "wedding-cakes", price: 1000.00, description: "A multi-tiered wedding cake decorated with purple roses and elegant piping, perfect for a romantic wedding.", image: "https://images.squarespace-cdn.com/content/v1/5f28f9e00b8cd54c2f22ba27/1598688652196-JZQMXUTM7V8TUL90YPY0/118489306_2720317388224263_1371017860137985612_n.jpg"},
    {id: 22, item: "Simple Naked Wedding Cake", category: "wedding-cakes", price: 900.00, description: "A rustic-style cake with minimal frosting, showcasing the cake layers and decorated with fresh flowers.", image: "https://images.squarespace-cdn.com/content/v1/5f28f9e00b8cd54c2f22ba27/1653183209690-VW6YWY5D8VZH9GN1IK05/272744756_7279528772087708_9018443143894376616_n.jpg?format=1000w"},
    {id: 23, item: "Sakura Wedding Cake", category: "wedding-cakes", price: 950.00, description: "A delicate wedding cake adorned with cherry blossom decorations, bringing a touch of spring elegance.", image: "https://www.fabmood.com/inspiration/wp-content/uploads/2024/08/638524-6.jpg"},
    {id: 24, item: "White Rose Wedding Cake", category: "wedding-cakes", price: 1000.00, description: "Classic white wedding cake with intricate rose decorations, symbolizing purity and romance.", image: "https://i.pinimg.com/736x/d7/27/c9/d727c9c9d44d3a97ac9ecea14846ca30.jpg"},
    {id: 25, item: "Chic Chanel-inspired Wedding Cake", category: "wedding-cakes", price: 925.00, description: "A stylish cake inspired by Chanel, featuring elegant details and a sophisticated color palette.", image: "https://brunetticlassico.com.au/wp-content/uploads/2024/11/rose-1.jpg"},

    // Custom Cakes (31–40)
    {id: 31, item: "Printed Image Custom Cake", category: "custom-cakes", price: 100.00, description: "A customizable cake featuring your chosen image printed on edible icing. Great for personal celebrations.", image: "https://brunetticlassico.com.au/wp-content/uploads/2024/11/Moana_WP-1.jpg"},
    {id: 32, item: "3D Custom Cake", category: "custom-cakes", price: 500.00, description: "A sculpted cake designed in three dimensions to match your chosen theme or character.", image: "https://brunetticlassico.com.au/wp-content/uploads/2023/05/R2D2-1024x820.png"},

    // Cupcakes (41–50)
    {id: 41, item: "Sprinkle Rainbow Cupcakes", category: "cupcakes", price: 4.50, description: "Colorful cupcakes topped with rainbow sprinkles and creamy frosting. Fun for parties and celebrations.", image: "https://bakealiciousbygabriela.com.au/cdn/shop/files/rainbowCupcakesSydneyBakealicious.jpg?v=1717376466"},
    {id: 42, item: "Watermelon Cupcakes", category: "cupcakes", price: 14.50, description: "Cupcakes inspired by watermelon, featuring fruity flavors and playful decorations.", image: "https://www.pillsburybaking.com/wp-content/uploads/2022/06/May-Pillsbury-cover-images-1-1-scaled.jpg"},
    {id: 43, item: "Mudslide Cupcakes", category: "cupcakes", price: 5.00, description: "Rich chocolate cupcakes with a creamy center and chocolate frosting, reminiscent of a mudslide dessert.", image: "https://cdn.cupcakeproject.com/wp-content/uploads/2024/01/Mudslide-Cupcakes-6.jpg"},
    {id: 44, item: "Easter Bunny Cupcakes", category: "cupcakes", price: 15.00, description: "Festive cupcakes decorated with bunny ears and pastel colors, perfect for Easter celebrations.", image: "https://www.vanillacupcakery.com.au/wp-content/uploads/2024/03/Easter-Bunny-cupcakes-2024.jpg"},
    {id: 45, item: "Pride Month Cupcakes", category: "cupcakes", price: 4.75, description: "Vibrant cupcakes decorated in rainbow colors to celebrate Pride Month and diversity.", image: "https://www.mylittlecupcake.com.au/cdn/shop/products/RainbowMinis.jpg?v=1736634207"},

    // Other Desserts (51–60)
    {id: 51, item: "Canolli with Ricotta Cream", category: "other-desserts", price: 15.00, description: "Crispy pastry shells filled with sweet ricotta cream, dusted with powdered sugar. A classic Italian treat.", image: "https://www.perfectitaliano.com.au/content/dam/perfectitaliano-aus/recipe/0_desktop/Desktop-Cannoli-with-Ricotta.jpg"},
    {id: 52, item: "Fudgy Triple Chocolate Brownies", category: "other-desserts", price: 12.00, description: "Dense and rich brownies made with three types of chocolate for an indulgent dessert.", image: "https://tutti-dolci.com/wp-content/uploads/2024/04/Triple-Chocolate-Brownies-3.jpg"},
    {id: 53, item: "Chocolate Chip Cookies", category: "other-desserts", price: 13.00, description: "Classic cookies loaded with chocolate chips, crispy on the edges and chewy in the center.", image: "https://static01.nyt.com/images/2022/02/12/dining/JT-Chocolate-Chip-Cookies/JT-Chocolate-Chip-Cookies-mediumSquareAt3X.jpg"},
    {id: 54, item: "Lemon Tart", category: "other-desserts", price: 18.00, description: "A crisp pastry shell filled with tangy lemon curd, topped with a dusting of sugar.", image: "https://www.elmundoeats.com/wp-content/uploads/2022/03/RC-Healthy-lemon-tarts-on-a-rack-view-from-front-2.jpg"},
    {id: 55, item: "Chocolate Mousse", category: "other-desserts", price: 16.00, description: "Light and airy chocolate mousse made with rich cocoa, perfect for chocolate lovers.", image: "https://www.recipetineats.com/tachyon/2018/09/Chocolate-Mousse_9.jpg?resize=500%2C500"},
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

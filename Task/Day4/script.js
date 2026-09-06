

// Product Array

const products = [
    {
        name: "Smart Watch",
        price: 3000,
        category: "Electronics"
    },
    {
        name: "Water Bottle",
        price: 600,
        category: "Home"
    },
    {
        name: "Backpack",
        price: 1800,
        category: "Fashion"
    },
    {
        name: "Table Lamp",
        price: 1200,
        category: "Home"
    },
    {
        name: "Bluetooth Speaker",
        price: 2500,
        category: "Electronics"
    }
];


// 1. filter()
// Get products under ₹1,000

const affordableProducts = products.filter(
    product => product.price < 1000
);

console.log("Products under ₹1,000:");
console.log(affordableProducts);


// 2. map()
// Get only product names

const productNames = affordableProducts.map(
    product => product.name
);

console.log("Product Names:");
console.log(productNames);


// 3. reduce()
// Calculate total price of all products

const totalPrice = products.reduce(
    (total, product) => total + product.price,
    0
);

console.log("Total Price:", totalPrice);


// 4. Template Literal

const message = `There are ${products.length} products available.`;

console.log(message);


// 5. Optional Chaining

console.log(products[0]?.category);

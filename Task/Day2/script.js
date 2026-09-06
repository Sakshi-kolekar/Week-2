//Array of 5 Product Objects

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


// Arrow Function to Calculate Total Price

const calculateTotal = (products) => {
    let total = 0;

    for (const product of products) {
        total += product.price;
    }

    return total;
};


// Calculate Total Price

const totalPrice = calculateTotal(products);

console.log("Total Price:", totalPrice);


// Destructuring

const { name, price } = products[0];

console.log("\nProduct Name:", name);
console.log("Product Price:", price);

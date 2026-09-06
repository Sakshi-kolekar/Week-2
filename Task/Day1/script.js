const prices = [400, 8200,156,5900,9000];

for (const price of prices) {
    if (price > 1000) {
        console.log(`Item over ₹1,000: ₹${price}`);
    }
}

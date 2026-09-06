const productsContainer =
    document.getElementById("products");


async function getProducts() {

    try {

        const response =
            await fetch("https://dummyjson.com/products/category/mens-shirts");

        const data =
            await response.json();

        const products =
            data.products;


        // Filter products with price below $100
        const filteredProducts =
            products.filter(product => product.price < 100);


        // Display products using map()
        const productCards =
            filteredProducts.map(product => {

                return `
                    <div class="card">

                        <img
                            src="${product.thumbnail}"
                            alt="${product.title}"
                        >

                        <h2>${product.title}</h2>

                        <p>${product.description}</p>

                        <p class="price">
                            Price: $${product.price}
                        </p>

                    </div>
                `;
            });


        productsContainer.innerHTML =
            productCards.join("");


    } catch (error) {

        productsContainer.innerHTML =
            "<p>Unable to load products.</p>";

        console.log(error);
    }
}


getProducts();
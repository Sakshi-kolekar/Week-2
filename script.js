const form = document.getElementById("searchForm");
const input = document.getElementById("searchInput");
const products = document.getElementById("products");
const loading = document.getElementById("loading");
const error = document.getElementById("error");

form.addEventListener("submit", async function (event) {

    event.preventDefault();

    const searchText = input.value.trim().toLowerCase();

    products.innerHTML = "";
    error.textContent = "";

    if (searchText === "") {
        error.textContent = "Please enter a product name.";
        return;
    }

    loading.style.display = "block";

    try {

        const response = await fetch(
            "https://dummyjson.com/products?limit=100"
        );

        if (!response.ok) {
            throw new Error("API Error");
        }

        const data = await response.json();

        // Filter products
        const filteredProducts = data.products.filter(product => {

            const title = product.title.toLowerCase();
            const category = product.category.toLowerCase();
            const description = product.description.toLowerCase();

            return (
                title.includes(searchText) ||
                category.includes(searchText) ||
                description.includes(searchText)
            );
        });

        if (filteredProducts.length === 0) {

            error.textContent = "No product found.";
            return;
        }

        // Map products into cards
        const productCards = filteredProducts.map(product => {

            return `
                <div class="card">

                    <img
                        src="${product.thumbnail}"
                        alt="${product.title}"
                    >

                    <h2>${product.title}</h2>

                    <p>${product.description}</p>

                    <p>
                        Category: ${product.category}
                    </p>

                    <p class="price">
                        Price: $${product.price}
                    </p>

                </div>
            `;
        });

        products.innerHTML = productCards.join("");

    } catch (err) {

        error.textContent =
            "Unable to fetch products. Check your internet connection.";

        console.log(err);

    } finally {

        loading.style.display = "none";
    }

});
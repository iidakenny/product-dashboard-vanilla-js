// Fetching the data using an API call and then rendering the products on the page. Added .catch block to handle any errors that may occur during the fetch operation. Also added a console log to check if the data is being fetched correctly.

function fetchProductsThen() {
    fetch("https://www.course-api.com/javascript-store-products")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            data.forEach(function (product) {
                console.log(product.fields.name);
            });
        })
        .catch(function (error) {
            console.log('Fetch error: ${error}');
        });
}


// Reusable error function to handle any errors that may occur during the fetch operation.

function handleError(error) {
    console.log('An error occurred: ${error.message}');
}

// Fetch products using async/await, pass data to displayProducts, handle errors with handleError. Converted prices from cents to dollars and formatted it to two decimal places.

async function fetchProductsAsync() {
    try {
        const response = await fetch("https://www.course-api.com/javascript-store-products");
        const data = await response.json();
        displayProducts(data);
    } catch (error) {
        handleError(error);
    }
}

function displayProducts(products) {
    const container = document.getElementById('product_container');
    
        products.slice(0,5).forEach(function (product) {
            const {name,price,image} = product.fields;
            const card = document.createElement('div');
            card.className = "product_card";

            card.innerHTML = `
                <img src="${image[0].url}" alt="${name}">
                <h2>${name}</h2>
                <p>$${(price / 100).toFixed(2)}</p>
            `;

            container.appendChild(card);
        });
}

// Calling both functions to fetch the products and display them on the page.

fetchProductsThen();
fetchProductsAsync();
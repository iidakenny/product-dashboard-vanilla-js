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


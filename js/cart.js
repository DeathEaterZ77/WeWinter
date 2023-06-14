
document.addEventListener("DOMContentLoaded", function () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');
    const price = urlParams.get('price');
    var cartItem = document.getElementById("cartItems").getElementsByTagName("tr");
    for (let i = 0; i < cartItem.length; i++) {
        var itemName = cartItem[i].getElementsByTagName("td")[1].className;
        console.log(itemName + " " + id);
        if (itemName === id) {
            var quantityCell = cartItem[i].getElementsByTagName("td")[1];
            var quantity = parseInt(quantityCell.innerText);
            quantity++;
            quantityCell.innerText = quantity.toString();
            updateTotalPrice(1, price); // Passer 1 pour ajouter le prix total
            break;
        }
    }
});


function addToCart(articleName, price) {
    var cartItem = document.getElementById("cartItems").getElementsByTagName("tr");
    for (let i = 0; i < cartItem.length; i++) {
        var itemName = cartItem[i].getElementsByTagName("td")[0].innerText;
        if (itemName === articleName) {
            var quantityCell = cartItem[i].getElementsByTagName("td")[1];
            var quantity = parseInt(quantityCell.innerText);
            quantity++;
            quantityCell.innerText = quantity.toString();
            updateTotalPrice(1, price); // Passer 1 pour ajouter le prix total
            break;
        }
    }
}
function updateTotalPrice(quantity, price) {
    var totalPriceElement = document.getElementById("totalPrice");
    var totalPrice = parseInt(totalPriceElement.innerText);
    totalPrice += quantity * price;
    totalPriceElement.innerText = totalPrice.toString();
}

function removeFromCart(articleName, price) {
    var cartItem = document.getElementById("cartItems").getElementsByTagName("tr");
    for (let i = 0; i < cartItem.length; i++) {
        var itemName = cartItem[i].getElementsByTagName("td")[0].innerText;
        if (itemName === articleName) {
            var quantityCell = cartItem[i].getElementsByTagName("td")[1];
            var quantity = parseInt(quantityCell.innerText);
            if (quantity > 0) {
                quantity--;
                quantityCell.innerText = quantity.toString();
                updateTotalPrice(-1, price); // Passer -1 pour réduire le prix total
            }
            break;
        }
    }
}



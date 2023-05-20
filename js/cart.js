function addToCart(item) {
    // Récupérer le nombre d'articles dans le panier depuis le stockage local
    let cartCount = localStorage.getItem("cartCount");

    // Vérifier si le nombre d'articles existe déjà dans le stockage local
    if (cartCount) {
        cartCount = parseInt(cartCount) + 1; // Incrémenter le nombre d'articles
    } else {
        cartCount = 1; // Définir le nombre d'articles à 1 s'il n'existe pas encore
    }

    // Enregistrer le nouveau nombre d'articles dans le stockage local
    localStorage.setItem("cartCount", cartCount);

    // Rediriger vers la page du panier
    window.location.href = "cart.html";
}



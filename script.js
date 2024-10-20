// Add to Cart event
  const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productCard = button.closest('.product-card');
            const productTitle = productCard.querySelector('.product-title').textContent;
            const productPrice = productCard.querySelector('.product-price').textContent;
            addItemToCart(productTitle, productPrice);
            alert("Item added to the cart");
        });
    });
  
  // Clear Cart event
  const clearCartButton = document.querySelector('.clear-cart-btn');
    if (clearCartButton) {
        clearCartButton.addEventListener('click', () => {
            if (sessionStorage.length > 0) {
                sessionStorage.clear();
                alert("Cart cleared");
                displayCartItems();
            } else {
                alert("No items to clear");
            }
        });
    }

  // Process Order event
  const processOrderButton = document.querySelector('.process-order-btn');
  if (processOrderButton) {
      processOrderButton.addEventListener('click', () => {
          if (sessionStorage.length > 0) {
              sessionStorage.clear();
              alert("Thank you for your order");
              displayCartItems();
          } else {
              alert("Cart is empty");
          }
      });
  }

    displayCartItems();

// Subscribe feature event handler
document.addEventListener("DOMContentLoaded", () => {
    const subscribeForm = document.querySelector('.subscription form');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert("Thank you for subscribing.");
        });
    }
});


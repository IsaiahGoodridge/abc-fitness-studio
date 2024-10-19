// Add to Cart event
  const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productCard = button.closest('.product-card');
            const productTitle = productCard.querySelector('.product-title').textContent;
            const productPrice = productCard.querySelector('.product-price').textContent;
            addItemToCart(productTitle);
            alert("Item added to the cart");
        });
    });
  
  // Clear Cart event
  document.querySelector('.clear-cart-btn').addEventListener('click', () => {
    const cartItems = document.querySelectorAll('.cart-item');
    if (cartItems.length > 0) {
      alert('Cart cleared');
    } else {
      alert('No items to clear');
    }
  });

  // Process Order event
  document.querySelector('.process-order-btn').addEventListener('click', () => {
    const cartItems = document.querySelectorAll('.cart-item');
    if (cartItems.length > 0) {
      alert('Thank you for your order');
    } else {
      alert('Cart is empty');
    }
  });


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


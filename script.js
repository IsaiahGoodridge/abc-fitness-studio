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

    // About Us Contact Form Local Storage
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            saveContactFormData();
            alert("Thank you for your message");
        });
    }
});

// Function to add item to sessionStorage cart
function addItemToCart(title, price) {
    let cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
    cartItems.push({ title, price });
    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
}

// Function to display cart items in View Cart modal
function displayCartItems() {
    const cartContainer = document.querySelector('.cart-items');
    if (cartContainer) {
        let cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
        cartContainer.innerHTML = cartItems.length > 0 
            ? cartItems.map(item => `${item.title} - ${item.price}`).join('<br>')
            : 'Cart is empty';
    }
}

// Save Contact Form Data to localStorage
function saveContactFormData() {
    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;
    const phoneNumber = document.getElementById('pnumber').value;
    const feedback = document.getElementById('feedback').value;

    const contactData = {
        firstName,
        lastName,
        phoneNumber,
        feedback
    };

    localStorage.setItem('contactData', JSON.stringify(contactData));
}


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


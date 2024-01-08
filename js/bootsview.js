 //  Onscroll function
 function showOnScroll() {
    var scrollDiv = document.getElementById("scrollDiv");
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
    if (scrollTop > 200) { // You can adjust this threshold value
        scrollDiv.style.display = "block";
    } else {
        scrollDiv.style.display = "none";
    }
  }
  
  // Add an event listener to detect scrolling
  window.addEventListener("scroll", showOnScroll);
  
  
  document.getElementById("hamburger").addEventListener("click", function() {
  var sidebar = document.getElementById("sidebar");
  var content = document.querySelector(".content");
  
  if (sidebar.style.width === "250px") {
      sidebar.style.width = "0";
      content.style.marginLeft = "0";
  } else {
      sidebar.style.width = "250px";
      content.style.marginLeft = "250px";
  }
  });
  
  
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });
  
  
  
  
  
  //grand total
  function updateTotal() {
    var productTotal = 40.00; // Updated price
    var quantity = parseInt(document.getElementById('quantity').value) || 1;
    var selectedSize = document.getElementById('size').value;

    // Perform additional calculations based on nameInput, numberInput if needed
    var grandTotal = productTotal * quantity;

    document.getElementById('productTotal').textContent = '$' + productTotal.toFixed(2);
    document.getElementById('quantityTotal').textContent = quantity;
    document.getElementById('selectedOption').textContent = 'Selected Option: ' + (selectedSize ? selectedSize : 'None');
    document.getElementById('grandTotal').textContent = '$' + grandTotal.toFixed(2);
}

// sizes
function clearSelection() {
    var selectedOption = document.getElementById('selectedOption');
    var selectElement = document.getElementById('size');

    selectElement.selectedIndex = 0; // Reset the dropdown to the default option
    selectedOption.textContent = 'Selected Option: None';
    updateTotal(); // Call updateTotal to recalculate totals after clearing the selection
}


var cart = [];

  // Function to calculate cart total
  function calculateCartTotal() {
    return cart.reduce((total, product) => total + (product.price * product.quantity), 0);
  }

  // Function to calculate number of items in the cart
  function calculateCartItems() {
    return cart.reduce((totalItems, product) => totalItems + product.quantity, 0);
  }

  // Function to update the cart icon
  function updateCartIcon() {
    var cartTotalElement = document.getElementById('cartTotal');
    var cartItemsElement = document.getElementById('cartItems');

    var total = calculateCartTotal();
    var items = calculateCartItems();

    cartTotalElement.textContent = 'UGX ' + total.toFixed(2);
    cartItemsElement.textContent = items;
  }

  // Function to update total and quantity based on user input
  function updateTotal() {
    var productTotal = 40.0; // Replace with your product's base price
    var quantity = parseInt(document.getElementById('quantity').value) || 1;

    var grandTotal = productTotal * quantity;

    document.getElementById('quantityTotal').textContent = quantity;
    document.getElementById('grandTotal').textContent = '$' + grandTotal.toFixed(2);
  }

  // Function to add product to the cart
  function addToCart() {
    var quantity = parseInt(document.getElementById('quantity').value) || 1;

    // Add your product details here, replace with your actual product data
    var product = {
      id: 1, // Replace with actual product ID
      name: 'Product 1', // Replace with actual product name
      price: 39.99, // Replace with actual product price
      quantity: quantity
    };

    cart.push(product);
    updateCartIcon();
  }
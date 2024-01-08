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

// // check boxes for the sizes
// function updateSelection(size) {
//   var selectedOption = document.getElementById('selectedOption');
//   var radioButtons = document.getElementsByName('size');

//   for (var i = 0; i < radioButtons.length; i++) {
//     if (radioButtons[i].checked) {
//       selectedOption.textContent = 'Selected Size: ' + size;
//       return;
//     }
//   }

//   // If none is selected, clear the displayed option
//   selectedOption.textContent = '';
// }

//  function clearSelection() {
//       var selectedOption = document.getElementById('selectedOption');
//       var radioButtons = document.getElementsByName('size');

//       for (var i = 0; i < radioButtons.length; i++) {
//         radioButtons[i].checked = false;
//       }

//       // Clear the displayed option
//       selectedOption.textContent = '';
//     }


    // yes/no selection
    function showInputs() {
      document.getElementById('nameInput').style.display = 'block';
      document.getElementById('numberInput').style.display = 'block';
      updateTotal();
    }

    function hideInputs() {
      document.getElementById('nameInput').style.display = 'none';
      document.getElementById('numberInput').style.display = 'none';
      updateTotal();
    }

//grand total
function updateTotal() {
  var productTotal = 39.99;
  var optionalTotal = 0;

  if (document.getElementById('yesRadio').checked) {
    optionalTotal += 10000; // Add UGX.10,000 for personalization
  }

  if (document.getElementById('patchesYes').checked) {
    optionalTotal += 10000; // Add UGX.10,000 for patches
  }

  var selectedSize = document.getElementById('size').value;
  document.getElementById('selectedOption').textContent = 'Selected Option: ' + (selectedSize ? selectedSize : 'None');

//sizes update and clear


  // var quantity = parseInt(document.getElementById('quantity').value) || 1;
  //   // Set productTotal based on the selected version
   
    var quantity = parseInt(document.getElementById('quantity').value) || 1;
    var nameInput = document.getElementById('name').value;
    var numberInput = parseFloat(document.getElementById('number').value) || 0
     
  // Perform additional calculations based on nameInput, numberInput if needed

  var grandTotal = (productTotal + optionalTotal) * quantity;

  document.getElementById('productTotal').textContent = '$' + productTotal.toFixed(2);
  document.getElementById('optionalTotal').textContent = '$' + optionalTotal.toFixed(2);
  document.getElementById('quantityTotal').textContent = quantity;
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


// cart add icons

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
    var productTotal = 39.99; // Replace with your product's base price
    var quantity = parseInt(document.getElementById('quantity').value) || 1;

    var grandTotal = productTotal * quantity;

    document.getElementById('quantityTotal').textContent = quantity;
    document.getElementById('grandTotal').textContent = '$' + grandTotal.toFixed(2);

    // cart
    function addToCartAndRedirect() {
      var quantity = parseInt(document.getElementById('quantity').value) || 1;
  
      // Add your product details here, replace with your actual product data
      var product = {
        id: 1, // Replace with actual product ID
        name: 'Product 1', // Replace with actual product name
        price: 39.99, // Replace with actual product price
        quantity: quantity
      };
  
      // Save the product data to sessionStorage
      sessionStorage.setItem('product', JSON.stringify(product));
  
      // Redirect to the checkout page
      window.location.href = 'checkout.html';
    }
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
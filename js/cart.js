var items = [
    { name: "Item 1", image: "coldwash.png", price: 20 },
    { name: "Item 2", image: "iron.png", price: 30 },
    { name: "Item 3", image: "Notbleach.png", price: 25 }
  ];

  function renderCart() {
    var cartItemsContainer = document.getElementById("cartItems");
    cartItemsContainer.innerHTML = "";

    items.forEach(function(item) {
      var row = document.createElement("tr");

      // Item Name
      var nameCell = document.createElement("td");
      nameCell.textContent = item.name;
      row.appendChild(nameCell);

      // Image
      var imageCell = document.createElement("td");
      var img = document.createElement("img");
      img.src = item.image;
      imageCell.appendChild(img);
      row.appendChild(imageCell);

      // Quantity (editable input)
      var quantityCell = document.createElement("td");
      var quantityInput = document.createElement("input");
      quantityInput.type = "number";
      quantityInput.value = 1;
      quantityInput.min = 1;
      quantityInput.addEventListener("input", function() {
        updateTotal(row, item.price);
      });
      quantityCell.appendChild(quantityInput);
      row.appendChild(quantityCell);

      // Total
      var totalCell = document.createElement("td");
      totalCell.textContent = "$" + item.price.toFixed(2);
      row.appendChild(totalCell);

      cartItemsContainer.appendChild(row);
    });
  }

  function updateTotal(row, price) {
    var quantity = parseInt(row.getElementsByTagName("input")[0].value);
    var totalCell = row.getElementsByTagName("td")[3];
    var total = quantity * price;
    totalCell.textContent = "$" + total.toFixed(2);
  }

  // Render the initial shopping cart
  renderCart();
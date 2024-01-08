function showDetails() {
    var paymentOption = document.getElementById("paymentOption").value;
    var mobileMoneyDetails = document.getElementById("mobileMoneyDetails");
    var visaCardDetails = document.getElementById("visaCardDetails");

    // Hide both details columns initially
    mobileMoneyDetails.style.display = "none";
    visaCardDetails.style.display = "none";

    // Show the selected details column
    if (paymentOption === "mobileMoney") {
      mobileMoneyDetails.style.display = "block";
    } else if (paymentOption === "visaCard") {
      visaCardDetails.style.display = "block";
    }
  }

  function submitPayment() {
    // Add your payment submission logic here
    alert("Payment submitted!");
  }
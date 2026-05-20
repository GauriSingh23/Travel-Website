function getQueryParam(key) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(key);
  }

  const tourName = getQueryParam('name') || "Unknown Tour";
  const tourPrice = parseInt(getQueryParam('price')) || 0;

  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("tour-name").textContent = tourName;
    document.getElementById("tour-price").textContent = `₹${tourPrice}`;


    window.selectedTour = {
      name: tourName,
      price: tourPrice
    };
  });


  function showFakePayment() {
    document.getElementById("fake-popup").style.display = "block";
  }

  function completePayment() {
    alert("Payment successful for " + window.selectedTour.name + "!");
    window.location.href = "thankyou.html";
  }


// JavaScript for Payment Functionality
function handlePayment(productName, pricePerUnit, quantityId) {
  const quantity = document.getElementById(quantityId).value;
  const totalPrice = pricePerUnit * quantity;
  alert(`You are purchasing ${quantity} units of ${productName}.\nTotal Price: $${totalPrice.toFixed(2)}\nProceeding to payment...`);
  // Redirect to a payment gateway (replace with actual payment link)
  // window.location.href = 'https://payment-gateway-link.com';
}
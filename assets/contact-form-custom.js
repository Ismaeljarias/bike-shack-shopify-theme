document.addEventListener("DOMContentLoaded", function() {
  const businessAccount = document.getElementById("businessAccount");
  const companyInfo = document.getElementById("companyInfo");
  const contactReason = document.getElementById("contactReason");
  const productNameField = document.getElementById("productNameField");
  const orderNumberField = document.getElementById("orderNumberField");

  // Event listeners
  businessAccount.addEventListener("change", function() {
    if (businessAccount.checked) {
      companyInfo.classList.remove("hidden");
    } else {
      companyInfo.classList.add("hidden");
    }
  });

  contactReason.addEventListener("change", function() {
    productNameField.classList.add("hidden");
    orderNumberField.classList.add("hidden");

    if (contactReason.value === "product") {
      productNameField.classList.remove("hidden");
    } else if (contactReason.value === "order") {
      orderNumberField.classList.remove("hidden");
    }
  });

});
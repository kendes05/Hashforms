const input = document.getElementById("discount-input");
const buttonDiscount = document.getElementById("apply-discount-button");
const spanApply = document.getElementById("apply-discount-span");
const icon = document.getElementById("toggle-icon");
const spanDiscount = document.getElementById("discount-span");
const spanWrongDiscount = document.getElementById("wrong-discount-span");
const totalPrice = document.getElementById("total-price");

spanApply.addEventListener("click", () => {
  if (input.style.display === "none" || input.style.display === "") {
    input.style.display = "block";
    buttonDiscount.style.display = "block";
    icon.classList.add("bx-chevron-up");
    icon.classList.remove("bxs-chevron-down");
  } else if (input.style.display === "block") {
    input.style.display = "none";
    buttonDiscount.style.display = "none";
    icon.classList.remove("bx-chevron-up");
    icon.classList.add("bxs-chevron-down");
  }
});

buttonDiscount.addEventListener("click", () => {
  if (input.value.trim().toUpperCase() === "DESCONTO10") {
    spanDiscount.style.display = "block";
    spanWrongDiscount.style.display = "none";
    spanDiscount.textContent = `Desconto de ${input.value.toUpperCase()} aplicado!`;
    totalPrice.textContent = "Preço Total: R$ 1080.00";
    input.value = "";
  } else {
    spanWrongDiscount.style.display = "block";
    spanDiscount.style.display = "none";
    input.value = "";
  }
});

//bxs-chevron-down

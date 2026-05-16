"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const addButtons = document.querySelectorAll(".add-to-cart");
    const messageArea = document.getElementById("message-area");
    if (!(messageArea instanceof HTMLElement)) {
        return;
    }
    addButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const productName = button.dataset.productName //|| button.closest(".product")?.querySelector("h3")?.textContent || "Product";
            messageArea.textContent = `${productName} has been added to the cart.`;
        });
    });
});


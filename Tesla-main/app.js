let input = document.querySelector("#phone");
window.intlTelInput(input, {});
let contact = document.querySelector("#phone2");
window.intlTelInput(contact, {});

// Function to smoothly scroll to the top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Add event listener for click on the button
document.querySelector(".back-to-top").addEventListener("click", scrollToTop);

// Show/hide the button based on scroll position
window.addEventListener("scroll", () => {
  const backToTopButton = document.querySelector(".back-to-top");
  if (window.pageYOffset > 300) {
    // Adjust the scroll threshold as needed
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

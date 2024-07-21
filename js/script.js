//Function callback
$(document).ready(function () {
  toggleMobileNavigation();
});

// Toggle mobile navigation
function toggleMobileNavigation() {
  var navbar = $(".navigation-holder");
  var openBtn = $(".navbar-header .open-btn");
  var hamburgerToggleBtn = $(".navbar-toggler");

  openBtn.on("click", function (e) {
    e.stopImmediatePropagation();
    navbar.toggleClass("slideInn");
    hamburgerToggleBtn.toggleClass("x-close");
    $("body").toggleClass("overflow-hidden");
    return false;
  });
}

// Language Selection
document.addEventListener("DOMContentLoaded", function () {
  const dropdownButton = document.querySelector(".dropdown-button");
  const dropdownContent = document.querySelector(".dropdown-content");
  const selectedLangSpan = dropdownButton.querySelector(".selected-lang");

  // Event listener for language selection
  dropdownContent.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
      const selectedLang = event.target.getAttribute("data-lang");
      selectedLangSpan.textContent = selectedLang;
      dropdownButton.classList.remove("open");
      dropdownContent.style.display = "none";
      event.preventDefault();
    }
  });

  // Toggle dropdown on button click
  dropdownButton.addEventListener("click", function () {
    const isOpen = dropdownButton.classList.toggle("open");
    dropdownContent.style.display = isOpen ? "block" : "none";
  });

  // Close dropdown when clicking outside of it
  document.addEventListener("click", function (event) {
    if (
      !dropdownButton.contains(event.target) &&
      !dropdownContent.contains(event.target)
    ) {
      dropdownButton.classList.remove("open");
      dropdownContent.style.display = "none";
    }
  });
});

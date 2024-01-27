// script-index.js

// Definición de la función toggleMenu
function toggleMenu() {
  var dropdown = document.querySelector(".header-dropdown");
  var overlay = document.querySelector(".overlay");

  dropdown.classList.toggle("open");
  overlay.style.display = overlay.style.display === "block" ? "none" : "block";
  document.body.classList.toggle("overlay-open");
}

document.addEventListener("DOMContentLoaded", function () {
  // Obtener todas las galerías en la página
  var galleries = document.querySelectorAll(".gallery");

  galleries.forEach(function (gallery) {
    var currentIndex = 0;
    var images = gallery.querySelectorAll("img");

    function showImage(index) {
      for (var i = 0; i < images.length; i++) {
        if (i === index) {
          images[i].classList.remove("hidden");
        } else {
          images[i].classList.add("hidden");
        }
      }
    }

    function updateButtonVisibility(currentIndex, totalImages) {
      var prevButton = gallery.querySelector(".prev");
      var nextButton = gallery.querySelector(".next");

      prevButton.style.display = currentIndex === 0 ? "none" : "inline-block";
      nextButton.style.display =
        currentIndex === totalImages - 1 ? "none" : "inline-block";
    }

    function changeImage(n) {
      var prevIndex = currentIndex;
      currentIndex = (currentIndex + n + images.length) % images.length;
      showImage(currentIndex);
      updateButtonVisibility(currentIndex, images.length);
    }

    var prevButton = gallery.querySelector(".prev");
    var nextButton = gallery.querySelector(".next");

    prevButton.addEventListener("click", function () {
      changeImage(-1);
    });

    nextButton.addEventListener("click", function () {
      changeImage(1);
    });

    // Asegurar que los botones estén configurados correctamente al inicio
    updateButtonVisibility(currentIndex, images.length);
  });

  var headerDropdown = document.querySelector(".header-dropdown");
  var overlay = document.querySelector(".overlay");

  // Función para cerrar el header-dropdown
  function closeHeaderDropdown() {
    headerDropdown.classList.remove("open");
    overlay.style.display = "none";
    document.body.classList.remove("overlay-open");
  }

  // Agregar un event listener para clics en el documento
  document.addEventListener("click", function (event) {
    var isClickInsideDropdown = headerDropdown.contains(event.target);
    var isClickOnMenuIcon = event.target.classList.contains("menu-icon");

    // Verificar si el clic ocurrió dentro del .header-dropdown o en el icono de menú
    if (!isClickInsideDropdown && !isClickOnMenuIcon) {
      closeHeaderDropdown();
    }
  });
});

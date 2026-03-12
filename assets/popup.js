document.addEventListener("DOMContentLoaded", function () {

  const popup = document.getElementById("popup-overlay");

  if (!popup) return;

  const closeButton = popup.querySelector(".popup-close");

  const delaySeconds = popup.dataset.delay || 5;

  const delay = delaySeconds * 1000;

  if (!sessionStorage.getItem("popupShown")) {

    setTimeout(() => {

      popup.classList.add("active");

      sessionStorage.setItem("popupShown", "true");

    }, delay);

  }

  closeButton.addEventListener("click", function () {

    popup.classList.remove("active");

  });

});
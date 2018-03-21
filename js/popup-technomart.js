var link = document.querySelector(".write-us");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");
var form = popup.querySelector("form");
var forename = popup.querySelector("[name=forename]");
var email = popup.querySelector("[name=email]");
var message = popup.querySelector("[name=message]");
var storage = localStorage.getItem("forename");
link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
  if (storage) {
    forename.value = storage;
    email.focus();
  } else {
  forename.focus();
  }
});
close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  popup.classList.remove("modal-error");
});
form.addEventListener("submit", function(event) {
  if (!forename.value || !email.value || !message.value) {
    event.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    localStorage.setItem("forename", forname.value);
  }
});
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-content-show")) {
      popup.classList.remove("modal-content-show");
      popup.classList.remove("modal-error");
    }
  }
});

var mapOpen = document.querySelector(".map");
var mapPopup = document.querySelector(".map-big");
var mapClose = mapPopup.querySelector(".map-big-close");
mapOpen.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.add("modal-content-show");
});
mapClose.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.remove("modal-content-show");
});
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (mapPopup.classList.contains("modal-content-show")) {
      mapPopup.classList.remove("modal-content-show");
    }
  }
});

  var cartOpen = document.querySelectorAll(".js-buy");
  var cartPopup = document.querySelector(".modal-item-basket");
  var cartClose = document.querySelector(".modal-item-basket-close");
  var cartCancel = document.querySelector(".shopping");
  for (i = 0; i < cartOpen.length; i++) {
    cartOpen[i].addEventListener("click", function (event) {
      event.preventDefault(event);
      cartPopup.classList.add("modal-item-show");
    });
  }
  cartClose.addEventListener("click", function(event) {
     event.preventDefault();
     cartPopup.classList.remove("modal-item-show");
   });
  cartCancel.addEventListener("click", function (event) {
    event.preventDefault(event);
    cartPopup.classList.remove("modal-item-show");
  });
  window.addEventListener("keydown", function (event) {
      if (event.keyCode == 27) {
          if (cartPopup.classList.contains("modal-item-show")) {
              cartPopup.classList.remove("modal-item-show");
          }
      }
  });

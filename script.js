const popup = document.querySelector("#popup");
const knap = document.querySelector("#quiz_knap");
const luk = document.querySelector("#luk");

// document.querySelector("#popup").addEventListener("click", () => (popup.style.display = "none"));
knap.addEventListener("click", () => (popup.style.display = "none"));
luk.addEventListener("click", () => (popup.style.display = "none"));

knap.addEventListener("click", startPopup);
function startPopup() {
  console.log();
  popup.classList.toggle("section");
  popup.style.display = "flex";
}

function visQuiz(event) {
  if (event.target == popup) {
    startPopup();
  }
}

// luk.addEventListener("click").classList.remove("#popup");

// BURGERMENU
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
// Adapted from https://www.w3schools.com/howto/howto_js_mobile_navbar.asp

function menuToggle() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

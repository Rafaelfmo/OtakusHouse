let cards = document.getElementsByClassName("card");
const navbar = document.querySelector(".navbar-nav");
const loginField = document.getElementById("loginField");

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", function () {
    window.location.href = "/descricao.html";
  });
}
const isLogged = localStorage.getItem("isLogged") === "true";

const newListItem = document.createElement("li");
newListItem.classList.add("nav-item");
const newAnchorTag = document.createElement("a");
newAnchorTag.classList.add("nav-link", "fw-semibold");
newAnchorTag.setAttribute("href", "/perfil.html");
newAnchorTag.textContent = "Perfil";

const newAnchorTag2 = document.createElement("a");
newAnchorTag2.classList.add("navbar-brand", "login-brand", "fw-bolder", "fs-6");
newAnchorTag2.setAttribute("href", "/login.html");
newAnchorTag2.textContent = "Login";

if (isLogged) {
  newListItem.appendChild(newAnchorTag);
  navbar.appendChild(newListItem);
} else {
  loginField.appendChild(newAnchorTag2);
}

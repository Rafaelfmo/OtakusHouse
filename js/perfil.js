const user = JSON.parse(localStorage.getItem("user"));
if (user === null) window.location.href = "/home.html";

const userFields = document.getElementsByClassName("edit");

for (let i = 0; i < userFields.length; i++) {
  const newP = document.createElement("p");
  newP.classList.add("form-label", "fw-normal");
  newP.textContent = user[userFields[i].getAttribute("id")];
  userFields[i].appendChild(newP);
}

const loginForm = document.getElementById("loginForm");
const btnCreateAccount = document.getElementById("createAccount");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const { email, password } = loginForm;

  const user = JSON.parse(localStorage.getItem("user"));

  if (user === null) return;

  if (email.value === user.email && password.value === user.password) {
    localStorage.setItem("isLogged", "true");
    window.location.href = "/home.html";
  } else {
    alert("Senha inválida, por favor tente novamente.");
  }
});

btnCreateAccount.addEventListener("click", () => {
  window.location.href = "/cadastro.html";
});

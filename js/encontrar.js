const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const { findByEmailOrPhone } = loginForm;

  const user = JSON.parse(localStorage.getItem("user"));

  if (user === null) return;

  if (
    findByEmailOrPhone.value === user.email ||
    findByEmailOrPhone.value === user.tel
  ) {
    window.location.href = "/redefinir.html";
  } else {
    alert("Usuário não encontrado, por favor tente novamente.");
  }
});

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const { password, confirmPassword } = loginForm;

  const user = JSON.parse(localStorage.getItem("user"));

  if (user === null) return;

  if (password.value === confirmPassword.value) {
    const withNewPassword = { ...user, password: password.value };
    localStorage.setItem("user", JSON.stringify(withNewPassword));
    window.location.href = "/login.html";
    alert("Senha alterada com sucesso!");
  } else {
    alert("Senhas não conferem, por favor tente novamente.");
  }
});

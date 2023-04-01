const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = loginForm.email.value;
  const password = loginForm.password.value;

  if (email === "1234@gmail.com" && password === "1234") {
    window.location.href = "/home.html";
  } else {
    alert("Senha inválida, por favor tente novamente.");
  }
});

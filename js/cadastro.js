const registerForm = document.getElementById("registerForm");
const toastLiveSuccess = document.getElementById("liveToast");

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const { name, email, tel, address, password, confirmPassword } = registerForm;

  if (password.value === confirmPassword.value) {
    const user = {
      name: name.value,
      email: email.value,
      tel: tel.value,
      address: address.value,
      password: password.value,
    };

    localStorage.setItem("user", JSON.stringify(user));

    const toastBootstrap =
      bootstrap.Toast.getOrCreateInstance(toastLiveSuccess);
    toastBootstrap.show();

    setTimeout(() => {
      window.location.href = "/login.html";
    }, 1000);
  } else {
    alert("As senhas não conferem, por favor tente novamente.");
  }
});

const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (email.value === "" || password.value === "") {
    alert(`Будь-ласка, заповніть всі поля`);
  } else {
    const userData = {
      email: email.value,
      password: password.value,
    };
    console.log(userData);
  }
  loginForm.reset();
});

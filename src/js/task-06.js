const input = document.querySelector("#validation-input");

input.addEventListener("blur", (event) => {
  const text = event.target;
  if (text.value.length === 6) {
    text.classList.add("valid");
    text.classList.remove("invalid");
  } else {
    text.classList.add("invalid");
    text.classList.remove("valid");
  }
});

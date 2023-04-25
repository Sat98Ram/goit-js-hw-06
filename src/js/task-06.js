const input = document.querySelector("#validation-input");

input.addEventListener("blur", (event) => {
  const text = event.target;
  if (text.value.length === 6) {
    text.style.outline = "3px solid green";
  } else {
    text.style.outline = "3px solid red";
  }
});

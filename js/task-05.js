const textIinput = document.querySelector("#name-input");

const textOutput = document.querySelector("#name-output");

textIinput.addEventListener("input", (event) => {
  textOutput.textContent = event.currentTarget.value || "Anonymous";
});

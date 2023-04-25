const textIinput = document.querySelector("#name-input");
console.log(textIinput);

const textOutput = document.querySelector("#name-output");
console.log(textOutput);

textIinput.addEventListener("input", (event) => {
  textOutput.textContent = event.currentTarget.value;
});

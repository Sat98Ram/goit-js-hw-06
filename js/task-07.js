const input = document.querySelector("#font-size-control");
const output = document.querySelector("#text");

input.addEventListener("input", (event) => {
  const size = input.value;
  output.style.fontSize = `${size}px`;
});

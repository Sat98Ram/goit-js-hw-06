const decrBtn = document.querySelector('[data-action="decrement"]');

const incrBtn = document.querySelector('[data-action="increment"]');

const value = document.querySelector("#value");

let counterValue = 0;

decrBtn.addEventListener("click", () => {
  counterValue -= 1;
  value.textContent = counterValue;
});

incrBtn.addEventListener("click", () => {
  counterValue += 1;
  value.textContent = counterValue;
});

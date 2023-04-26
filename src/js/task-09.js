function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const page = document.querySelector("body");

const btnColor = document.querySelector(".change-color");

btnColor.addEventListener("click", () => {
  const color = document.querySelector(".color");
  const background = getRandomHexColor();
  page.style.backgroundColor = background;
  color.textContent = background;
});

// Напиши скрипт,
// який змінює кольори фону елемента < body > через інлайн - стиль
// по кліку на button.change - color і виводить значення кольору в span.color.

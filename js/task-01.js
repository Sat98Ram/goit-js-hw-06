const categories = document.querySelectorAll(".item");
console.log("Number of categories: ", categories.length);
categories.forEach((element) => {
  const title = element.querySelector("h2");
  const quantity = element.querySelectorAll("li");
  console.log(`Category: ${title.textContent}
  Elements: ${quantity.length}`);
});

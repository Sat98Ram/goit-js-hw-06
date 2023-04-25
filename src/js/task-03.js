const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const list = document.querySelector(".gallery");

const imageEl = images.map((img) => {
  const listItem = document.createElement("li");
  listItem.classList.add("gallery-item");

  const image = document.createElement("img");
  image.classList.add("image-item");
  image.src = img.url;
  image.alt = img.alt;

  listItem.appendChild(image);

  list.appendChild(listItem);
});

// list.insertAdjacentHTML('beforeend', );

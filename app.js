let container = document.querySelector(".container");

for (let index = 0; index < 48; index++) {
  const colorContainer = document.createElement("div");
  colorContainer.classList.add("color-container");
  container.appendChild(colorContainer);
}

let colorContainer = document.querySelectorAll(".color-container");
gnarateColor();

function gnarateColor() {
  colorContainer.forEach((i) => {
    const random = randomColor();
    i.style.backgroundColor = "#" + random;
    i.innerText = "#" + random;
  });
}

function randomColor() {
  const chars = "0123456789abcdef";
  //const colorCodeLength = 6;
  let color = "";
  for (let index = 0; index < 6; index++) {
    const rendomNumber = Math.floor(Math.random() * chars.length);
    color += chars[rendomNumber];
  }
  return color;
}

const addProduct = () => {
  const input = document.querySelector("input");
  const ul = document.querySelector("ul");
  const liElement = document.createElement("li");
  const value = input.value;
  liElement.innerHTML = `<input type="checkbox"/> ${value}`;
  ul.appendChild(liElement);
};

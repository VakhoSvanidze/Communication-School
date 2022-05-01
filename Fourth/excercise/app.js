<<<<<<< HEAD
const add = document.querySelector("#add");
const convert = document.querySelector("#convert");
const container = document.querySelector("#input-container");
const resultContainer = document.querySelector("#result-container");
let items = [];

add.addEventListener("click",() => {
  const newField = document.createElement("input");
  newField.classList.add("inputs");
  container.appendChild(newField);
  items.push(newField);
});

convert.addEventListener("click", () => {
  const valueContainer = [];
  for(const element of items) {
    const value = element.value;
    valueContainer.push(value);
  }
  
  const string = JSON.stringify(valueContainer);

  const text = document.createElement("p");
  const node = document.createTextNode(string);
  text.classList.add("text");
  text.appendChild(node);
  resultContainer.appendChild(text);
})


=======
const add = document.querySelector("#add");
const convert = document.querySelector("#convert");
const container = document.querySelector("#input-container");
const resultContainer = document.querySelector("#result-container");
let items = [];

add.addEventListener("click",() => {
  const newField = document.createElement("input");
  newField.classList.add("inputs");
  container.appendChild(newField);
  items.push(newField);
});

convert.addEventListener("click", () => {
  const valueContainer = [];
  for(const element of items) {
    const value = element.value;
    valueContainer.push(value);
  }
  
  const string = JSON.stringify(valueContainer);

  const text = document.createElement("p");
  const node = document.createTextNode(string);
  text.classList.add("text");
  text.appendChild(node);
  resultContainer.appendChild(text);
})


>>>>>>> c73f129eec5aa6da070a355b6a41e514288ce3be

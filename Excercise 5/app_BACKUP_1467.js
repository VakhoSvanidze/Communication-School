<<<<<<< HEAD
const apiUrl = 'https://randomuser.me/api';
const btn = document.querySelector('.btn');
const container = document.querySelector(".container");

btn.addEventListener("click", getData);

// async function getData() {
//   const response = await fetch(apiUrl);
//   const data = await response.json();
//   const resultData = data.results[0];
//   getName(resultData);
//   otherData(resultData);
//   container.classList.remove("hidden");
// }

async function getData() {
  const request = new XMLHttpRequest();
  request.open('GET', apiUrl);
  request.send();
  request.onload = () => {
    if (request.status >= 200 && request.status < 400) {
      const data = JSON.parse(request.response);
      const resultData = data.results[0];
      getName(resultData);
      otherData(resultData);
      container.classList.remove("hidden");
    } else {
      console.log(`${request.statusText}: ${request.status} error`);
    }
  }
  request.onerror = () => console.log(request.statusText);
}

function otherData(data) {
  const img = document.querySelector('.img');
  const email = document.querySelector("#email")
  const location = document.querySelector("#location");

  img.src = data.picture.large;
  email.textContent = `Email: ${data.email}`;
  location.textContent = `Location: ${data.location.city}`;
}

function getName(data) {
  const fullName = document.querySelector('#name');
  let name = Object.values(data.name);
  let nameString = "";
  for(const element of name) {
    nameString += element + " ";
  }
  fullName.textContent = `Full Name: ${nameString}`;
}



=======
const apiUrl = 'https://randomuser.me/api';
const btn = document.querySelector('.btn');
const container = document.querySelector(".container");

btn.addEventListener("click", getData);

// async function getData() {
//   const response = await fetch(apiUrl);
//   const data = await response.json();
//   const resultData = data.results[0];
//   getName(resultData);
//   otherData(resultData);
//   container.classList.remove("hidden");
// }

async function getData() {
  const request = new XMLHttpRequest();
  request.open('GET', apiUrl);
  request.send();
  request.onload = () => {
    if (request.status >= 200 && request.status < 400) {
      const data = JSON.parse(request.response);
      const resultData = data.results[0];
      getName(resultData);
      otherData(resultData);
      container.classList.remove("hidden");
    } else {
      console.log(`${request.statusText}: ${request.status} error`);
    }
  }
  request.onerror = () => console.log(request.statusText);
}

function otherData(data) {
  const img = document.querySelector('.img');
  const email = document.querySelector("#email")
  const location = document.querySelector("#location");

  img.src = data.picture.large;
  email.textContent = `Email: ${data.email}`;
  location.textContent = `Location: ${data.location.city}`;
}

function getName(data) {
  const fullName = document.querySelector('#name');
  let name = Object.values(data.name);
  let nameString = "";
  for(const element of name) {
    nameString += element + " ";
  }
  fullName.textContent = `Full Name: ${nameString}`;
}



>>>>>>> c73f129eec5aa6da070a355b6a41e514288ce3be

const h2 = document.createElement("h2")
h2.textContent = "My name is James Salcedo, and I love coding!";

document.querySelector("body").appendChild(h2);

const input = document.getElementById('button');
input.addEventListener('click', function() {
  alert('I was clicked!');
});
const form = document.getElementById("user-form");
const output = document.getElementById("output-container");

function createCard(data) {
  const card = document.createElement("div");
  card.className = "card";

  const image = document.createElement("img");
  image.src = data.url;
  image.alt = "User Image";

  card.appendChild(image);
  card.innerHTML += `
        <h2>${data.name} ${data.surname}</h2>
        <p>Yosh: ${data.age}</p>
        <p>Qayerda yashaysiz: ${data.location}</p>
        <p>Telefon: ${data.phone}</p>
        <p>Email: ${data.email}</p>
    `;
  output.appendChild(card);
}
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const location = document.getElementById("location").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const url = document.getElementById("image-url").value;

  const usr = { name, surname, age, location, phone, email, url };

  localStorage.setItem("usr", JSON.stringify(usr));
  createCard(usr);
  form.reset();
});

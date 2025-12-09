// When the button is clicked it should make an API call to `https://dog.ceo/api/breeds/image/random`
//After receiving the data, append to the `<ul>` a `<li>` that contains an `<img>` element with the dog image
function fetchDogImage() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      const photoContainer = document.getElementById("photo-container");
      const li = document.createElement("li");
      const img = document.createElement("img");
      img.src = data.message;
      li.appendChild(img);
      photoContainer.appendChild(li);
    })
    .catch((error) => {
      console.error("Error fetching dog image:", error);
    });
  console.log("Dog image fetch initiated.");
}

document
  .getElementById("fetch-dog-button")
  .addEventListener("click", fetchDogImage);

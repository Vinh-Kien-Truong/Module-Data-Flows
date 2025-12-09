const apiKey = "496b4819e3de6a36ceef7670e286f46d";
const unsplashAccessKey = "BiKnDmMqMi3f-ka6mkTirAlj7smDTCaceRlYtGFCYcU";
const city = "London";
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

async function getWeather() {
  try {
    const response = await fetch(weatherUrl);
    const data = await response.json();
    const description = data.weather[0].description;
    console.log(`Current weather in ${city}: ${description}`);
    return description;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

async function getImages(query) {
  const unsplashUrl = `https://api.unsplash.com/search/photos?query=${query}&client_id=${unsplashAccessKey}`;

  try {
    const response = await fetch(unsplashUrl);
    const data = await response.json();
    console.log("Unsplash API response data:", data);
    // Extract both thumbnail and full image URLs
    const images = data.results.map((photo) => ({
      thumb: photo.urls.thumb,
      full: photo.urls.full,
    }));
    console.log("Image thumb/full pairs:", images);
    return images;
  } catch (error) {
    console.error("Error fetching images from Unsplash:", error);
  }
}
//Display the images as a gallery of clickable thumbnails (clicking loads the main image)
async function displayWeatherImages() {
  const weatherDescription = await getWeather();
  let images = [];
  if (weatherDescription) {
    images = await getImages(weatherDescription);
  }

  const photoContainer = document.getElementById("photo");
  const thumbs = document.getElementById("thumbs");

  // Override the pseudo-element content via a dynamically injected style
  const overrideStyle = document.createElement("style");
  overrideStyle.textContent = '.photo::before { content: "" !important; }';
  document.head.appendChild(overrideStyle);

  // Clear previous thumbnails if any
  thumbs.innerHTML = "";

  images.forEach((imgObj) => {
    const imgElement = document.createElement("img");
    imgElement.src = imgObj.thumb;
    imgElement.style.margin = "5px";
    imgElement.style.cursor = "pointer";
    imgElement.onclick = () => {
      photoContainer.style.setProperty(
        "background",
        `url(${imgObj.full}) no-repeat center center/cover`
      );
    };
    thumbs.appendChild(imgElement);
  });
}

displayWeatherImages();

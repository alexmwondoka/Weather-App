function handleSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let cityName = document.querySelector(".city");
  cityName.innerHTML = searchInput.value;
  console.log(cityName);
}

let searchElement = document.querySelector("#weather-form");
searchElement.addEventListener("submit", handleSearch);

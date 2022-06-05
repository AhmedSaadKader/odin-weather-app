export default function displayDiv() {
  const displayDivElement = document.createElement("div");
  displayDivElement.classList = "display-div";
  const locationLabel = document.createElement("div");
  locationLabel.classList = "display-label";
  locationLabel.innerHTML = "location";
  const displayCityElement = document.createElement("div");
  const temperatureLabel = document.createElement("div");
  temperatureLabel.classList = "display-label";
  temperatureLabel.innerHTML = "temperature";
  const displayTempElement = document.createElement("div");

  displayDivElement.append(
    locationLabel,
    displayCityElement,
    temperatureLabel,
    displayTempElement
  );

  const displayCityData = (city) => {
    displayCityElement.innerHTML = city;
  };

  const displayTempData = (temp) => {
    displayTempElement.innerHTML = temp;
  };

  return {
    displayDivElement,
    displayCityElement,
    displayTempElement,
    displayCityData,
    displayTempData,
  };
}

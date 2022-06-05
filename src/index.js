import "./style.css";
import fetchData from "./fetch_data";
import formComponents from "./form_components";
import displayDiv from "./display_div";

function component() {
  const appDiv = document.createElement("div");
  appDiv.id = "app-div";
  const form = formComponents();
  const display = displayDiv();
  appDiv.append(display.displayDivElement, form.form);

  const cairoData = fetchData("cairo");
  cairoData.then((data) => {
    display.displayCityData(`${data.city}, ${data.country}`);
    display.displayTempData(`${data.temp}°C`);
  });

  form.form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (form.locationInput.value == "") {
      cairoData.then((data) => {
        display.displayCityData(`${data.city}, ${data.country}`);
        display.displayTempData(`${data.temp}°C`);
      });
    } else {
      fetchData(form.locationInput.value).then((data) => {
        display.displayCityData(`${data.city}, ${data.country}`);
        display.displayTempData(`${data.temp}°C`);
      });
    }
    form.form.reset();
  });

  return appDiv;
}
document.body.appendChild(component());

export default function formComponents() {
  const form = document.createElement("form");
  const locationInput = document.createElement("input");
  locationInput.id = "location-input";
  const btn = document.createElement("button");
  btn.innerHTML = "search";
  form.append(locationInput, btn);
  return { form, locationInput };
}

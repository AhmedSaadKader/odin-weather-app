export default async function fetchData(location) {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=b7faebfa66dce018ea1a57d4c41ceb3d`,
      { mode: "cors" }
    );
    const responseJSON = await response.json();
    console.log(responseJSON);
    const city = responseJSON.name;
    const country = responseJSON.sys.country;
    const temp = (responseJSON.main.temp - 273.15).toFixed(2);
    const data = {
      city: city,
      country: country,
      temp: temp,
    };
    return data;
  } catch (error) {
    console.log(error);
  }
}

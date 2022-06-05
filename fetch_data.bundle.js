"use strict";
(self["webpackChunkodin_weather_app"] = self["webpackChunkodin_weather_app"] || []).push([["fetch_data"],{

/***/ "./src/fetch_data.js":
/*!***************************!*\
  !*** ./src/fetch_data.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ fetchData)
/* harmony export */ });
async function fetchData(location) {
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/fetch_data.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmV0Y2hfZGF0YS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBLDBEQUEwRCxTQUFTO0FBQ25FLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9mZXRjaF9kYXRhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YShsb2NhdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb259JkFQUElEPWI3ZmFlYmZhNjZkY2UwMThlYTFhNTdkNGM0MWNlYjNkYCxcclxuICAgICAgeyBtb2RlOiBcImNvcnNcIiB9XHJcbiAgICApO1xyXG4gICAgY29uc3QgcmVzcG9uc2VKU09OID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2VKU09OKTtcclxuICAgIGNvbnN0IGNpdHkgPSByZXNwb25zZUpTT04ubmFtZTtcclxuICAgIGNvbnN0IGNvdW50cnkgPSByZXNwb25zZUpTT04uc3lzLmNvdW50cnk7XHJcbiAgICBjb25zdCB0ZW1wID0gKHJlc3BvbnNlSlNPTi5tYWluLnRlbXAgLSAyNzMuMTUpLnRvRml4ZWQoMik7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBjaXR5OiBjaXR5LFxyXG4gICAgICBjb3VudHJ5OiBjb3VudHJ5LFxyXG4gICAgICB0ZW1wOiB0ZW1wLFxyXG4gICAgfTtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
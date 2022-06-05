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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmV0Y2hfZGF0YS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBLDBEQUEwRCxTQUFTO0FBQ25FLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvZmV0Y2hfZGF0YS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEobG9jYXRpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2xvY2F0aW9ufSZBUFBJRD1iN2ZhZWJmYTY2ZGNlMDE4ZWExYTU3ZDRjNDFjZWIzZGAsXHJcbiAgICAgIHsgbW9kZTogXCJjb3JzXCIgfVxyXG4gICAgKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlSlNPTiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGNvbnN0IGNpdHkgPSByZXNwb25zZUpTT04ubmFtZTtcclxuICAgIGNvbnN0IGNvdW50cnkgPSByZXNwb25zZUpTT04uc3lzLmNvdW50cnk7XHJcbiAgICBjb25zdCB0ZW1wID0gKHJlc3BvbnNlSlNPTi5tYWluLnRlbXAgLSAyNzMuMTUpLnRvRml4ZWQoMik7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBjaXR5OiBjaXR5LFxyXG4gICAgICBjb3VudHJ5OiBjb3VudHJ5LFxyXG4gICAgICB0ZW1wOiB0ZW1wLFxyXG4gICAgfTtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
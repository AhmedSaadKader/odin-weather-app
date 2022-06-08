"use strict";
(self["webpackChunkodin_weather_app"] = self["webpackChunkodin_weather_app"] || []).push([["display_div"],{

/***/ "./src/display_div.js":
/*!****************************!*\
  !*** ./src/display_div.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayDiv)
/* harmony export */ });
function displayDiv() {
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/display_div.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheV9kaXYuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9kaXNwbGF5X2Rpdi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5RGl2KCkge1xyXG4gIGNvbnN0IGRpc3BsYXlEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBkaXNwbGF5RGl2RWxlbWVudC5jbGFzc0xpc3QgPSBcImRpc3BsYXktZGl2XCI7XHJcbiAgY29uc3QgbG9jYXRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbG9jYXRpb25MYWJlbC5jbGFzc0xpc3QgPSBcImRpc3BsYXktbGFiZWxcIjtcclxuICBsb2NhdGlvbkxhYmVsLmlubmVySFRNTCA9IFwibG9jYXRpb25cIjtcclxuICBjb25zdCBkaXNwbGF5Q2l0eUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IHRlbXBlcmF0dXJlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHRlbXBlcmF0dXJlTGFiZWwuY2xhc3NMaXN0ID0gXCJkaXNwbGF5LWxhYmVsXCI7XHJcbiAgdGVtcGVyYXR1cmVMYWJlbC5pbm5lckhUTUwgPSBcInRlbXBlcmF0dXJlXCI7XHJcbiAgY29uc3QgZGlzcGxheVRlbXBFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgZGlzcGxheURpdkVsZW1lbnQuYXBwZW5kKFxyXG4gICAgbG9jYXRpb25MYWJlbCxcclxuICAgIGRpc3BsYXlDaXR5RWxlbWVudCxcclxuICAgIHRlbXBlcmF0dXJlTGFiZWwsXHJcbiAgICBkaXNwbGF5VGVtcEVsZW1lbnRcclxuICApO1xyXG5cclxuICBjb25zdCBkaXNwbGF5Q2l0eURhdGEgPSAoY2l0eSkgPT4ge1xyXG4gICAgZGlzcGxheUNpdHlFbGVtZW50LmlubmVySFRNTCA9IGNpdHk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGlzcGxheVRlbXBEYXRhID0gKHRlbXApID0+IHtcclxuICAgIGRpc3BsYXlUZW1wRWxlbWVudC5pbm5lckhUTUwgPSB0ZW1wO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBkaXNwbGF5RGl2RWxlbWVudCxcclxuICAgIGRpc3BsYXlDaXR5RWxlbWVudCxcclxuICAgIGRpc3BsYXlUZW1wRWxlbWVudCxcclxuICAgIGRpc3BsYXlDaXR5RGF0YSxcclxuICAgIGRpc3BsYXlUZW1wRGF0YSxcclxuICB9O1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
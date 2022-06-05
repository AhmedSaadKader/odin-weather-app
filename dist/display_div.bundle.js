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
  const displayCityElement = document.createElement("h2");
  const displayTempElement = document.createElement("h2");
  const icon = document.createElement("i");
  icon.classList = "fa-solid fa-code-branch";
  displayDivElement.append(displayCityElement, displayTempElement, icon);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheV9kaXYuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL2Rpc3BsYXlfZGl2LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlEaXYoKSB7XHJcbiAgY29uc3QgZGlzcGxheURpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGRpc3BsYXlDaXR5RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICBjb25zdCBkaXNwbGF5VGVtcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG4gIGljb24uY2xhc3NMaXN0ID0gXCJmYS1zb2xpZCBmYS1jb2RlLWJyYW5jaFwiO1xyXG4gIGRpc3BsYXlEaXZFbGVtZW50LmFwcGVuZChkaXNwbGF5Q2l0eUVsZW1lbnQsIGRpc3BsYXlUZW1wRWxlbWVudCwgaWNvbik7XHJcblxyXG4gIGNvbnN0IGRpc3BsYXlDaXR5RGF0YSA9IChjaXR5KSA9PiB7XHJcbiAgICBkaXNwbGF5Q2l0eUVsZW1lbnQuaW5uZXJIVE1MID0gY2l0eTtcclxuICB9O1xyXG5cclxuICBjb25zdCBkaXNwbGF5VGVtcERhdGEgPSAodGVtcCkgPT4ge1xyXG4gICAgZGlzcGxheVRlbXBFbGVtZW50LmlubmVySFRNTCA9IHRlbXA7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGRpc3BsYXlEaXZFbGVtZW50LFxyXG4gICAgZGlzcGxheUNpdHlFbGVtZW50LFxyXG4gICAgZGlzcGxheVRlbXBFbGVtZW50LFxyXG4gICAgZGlzcGxheUNpdHlEYXRhLFxyXG4gICAgZGlzcGxheVRlbXBEYXRhLFxyXG4gIH07XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
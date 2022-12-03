/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game.js */ \"./src/scripts/game.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  let canvas = document.querySelector(\"#game-box\");\n  let ctx = canvas.getContext(\"2d\");\n  let game = new _scripts_game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBb0M7QUFFcENDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNwRCxJQUFJQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLFdBQVcsQ0FBQztFQUNoRCxJQUFJQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0csVUFBVSxDQUFDLElBQUksQ0FBQztFQUlqQyxJQUFJQyxJQUFJLEdBQUcsSUFBSVAsd0RBQUksQ0FBQ0ssR0FBRyxDQUFDO0FBVXhCLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHRfcHJvamVjdC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lIGZyb20gJy4vc2NyaXB0cy9nYW1lLmpzJ1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG5sZXQgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnYW1lLWJveFwiKVxubGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIilcblxuXG5cbmxldCBnYW1lID0gbmV3IEdhbWUoY3R4KTtcblxuXG5cblxuXG5cblxuXG5cbn0pIl0sIm5hbWVzIjpbIkdhbWUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJxdWVyeVNlbGVjdG9yIiwiY3R4IiwiZ2V0Q29udGV4dCIsImdhbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ \"./src/scripts/player.js\");\n\nclass Game {\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.player = new _player_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n    this.player.animate();\n  }\n  startGame() {}\n  startRound() {}\n  animate() {\n    //background Image\n    // const background = new Image()\n    // background.src = \"src/assets/background.png\"\n\n    //Player\n    // const spriteSheet = new Image()\n    // spriteSheet.src = \"src/assets/astronaut.png\"\n    // spriteSheet.classList.add(\"astronaut\")\n\n    // window.onload = ()=> {\n\n    //     this.ctx.drawImage(background, 0, 0);\n\n    // }\n    this.player.animate();\n  }\n  restart() {}\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7O0FBQ2dDO0FBQ2hDLE1BQU1DLElBQUksQ0FBQztFQUNQQyxXQUFXLENBQUNDLEdBQUcsRUFBQztJQUVaLElBQUksQ0FBQ0EsR0FBRyxHQUFHQSxHQUFHO0lBQ2QsSUFBSSxDQUFDQyxNQUFNLEdBQUcsSUFBSUosa0RBQU0sQ0FBQ0csR0FBRyxDQUFDO0lBQzdCLElBQUksQ0FBQ0MsTUFBTSxDQUFDQyxPQUFPLEVBQUU7RUFJekI7RUFFQUMsU0FBUyxHQUFFLENBRVg7RUFFQUMsVUFBVSxHQUFFLENBRVo7RUFFQUYsT0FBTyxHQUFFO0lBQ0w7SUFDQTtJQUNBOztJQUVBO0lBQ0E7SUFDQTtJQUNBOztJQUlBOztJQUVBOztJQUVBO0lBQ0EsSUFBSSxDQUFDRCxNQUFNLENBQUNDLE9BQU8sRUFBRTtFQUd6QjtFQUVBRyxPQUFPLEdBQUUsQ0FFVDtBQUVKO0FBQ0EsK0RBQWVQLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0X3Byb2plY3QvLi9zcmMvc2NyaXB0cy9nYW1lLmpzP2NkYzAiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyLmpzJ1xuY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY3R4KXtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4XG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcihjdHgpXG4gICAgICAgIHRoaXMucGxheWVyLmFuaW1hdGUoKVxuXG4gICAgICBcbiAgICAgICAgXG4gICAgfVxuXG4gICAgc3RhcnRHYW1lKCl7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHN0YXJ0Um91bmQoKXtcblxuICAgIH1cblxuICAgIGFuaW1hdGUoKXtcbiAgICAgICAgLy9iYWNrZ3JvdW5kIEltYWdlXG4gICAgICAgIC8vIGNvbnN0IGJhY2tncm91bmQgPSBuZXcgSW1hZ2UoKVxuICAgICAgICAvLyBiYWNrZ3JvdW5kLnNyYyA9IFwic3JjL2Fzc2V0cy9iYWNrZ3JvdW5kLnBuZ1wiXG5cbiAgICAgICAgLy9QbGF5ZXJcbiAgICAgICAgLy8gY29uc3Qgc3ByaXRlU2hlZXQgPSBuZXcgSW1hZ2UoKVxuICAgICAgICAvLyBzcHJpdGVTaGVldC5zcmMgPSBcInNyYy9hc3NldHMvYXN0cm9uYXV0LnBuZ1wiXG4gICAgICAgIC8vIHNwcml0ZVNoZWV0LmNsYXNzTGlzdC5hZGQoXCJhc3Ryb25hdXRcIilcblxuXG4gICAgICAgIFxuICAgICAgICAvLyB3aW5kb3cub25sb2FkID0gKCk9PiB7XG4gICAgICAgICAgIFxuICAgICAgICAvLyAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGJhY2tncm91bmQsIDAsIDApO1xuICAgICAgICBcbiAgICAgICAgLy8gfVxuICAgICAgICB0aGlzLnBsYXllci5hbmltYXRlKClcbiAgICAgICBcblxuICAgIH1cblxuICAgIHJlc3RhcnQoKXtcblxuICAgIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgR2FtZTsiXSwibmFtZXMiOlsiUGxheWVyIiwiR2FtZSIsImNvbnN0cnVjdG9yIiwiY3R4IiwicGxheWVyIiwiYW5pbWF0ZSIsInN0YXJ0R2FtZSIsInN0YXJ0Um91bmQiLCJyZXN0YXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Player {\n  constructor(ctx) {\n    this.x = -30;\n    this.y = 55;\n    this.astronaut = new Image();\n    this.astronaut.src = \"src/assets/astronaut.png\";\n    this.ctx = ctx;\n  }\n  animate() {\n    this.astronaut.onload = () => {\n      this.ctx.clearRect(0, 0, 800, 340);\n      this.ctx.drawImage(this.astronaut, this.x, this.y, 150, 150);\n    };\n    document.addEventListener(\"keydown\", e => {\n      if (e.key === 'ArrowRight' || e.key === 'Right') {\n        this.x += 30;\n        console.log(this.x);\n        this.ctx.clearRect(0, 0, 800, 340);\n        this.ctx.drawImage(this.astronaut, this.x, this.y, 150, 150);\n      }\n      if (e.key === 'ArrowLeft' || e.key === 'Left') {\n        this.x -= 30;\n        this.ctx.clearRect(0, 0, 800, 340);\n        this.ctx.drawImage(this.astronaut, this.x, this.y, 150, 150);\n      }\n    });\n  }\n  moveRight() {\n    this.x += 10;\n  }\n  moveLeft() {\n    this.x -= 10;\n  }\n  rightAnswer() {}\n  wrongAnswer() {}\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanMuanMiLCJtYXBwaW5ncyI6IjtBQUdBLE1BQU1BLE1BQU0sQ0FBQztFQUNUQyxXQUFXLENBQUNDLEdBQUcsRUFBQztJQUNaLElBQUksQ0FBQ0MsQ0FBQyxHQUFHLENBQUMsRUFBRTtJQUNaLElBQUksQ0FBQ0MsQ0FBQyxHQUFHLEVBQUU7SUFDWCxJQUFJLENBQUNDLFNBQVMsR0FBRyxJQUFJQyxLQUFLLEVBQUU7SUFDNUIsSUFBSSxDQUFDRCxTQUFTLENBQUNFLEdBQUcsR0FBRywwQkFBMEI7SUFDL0MsSUFBSSxDQUFDTCxHQUFHLEdBQUdBLEdBQUc7RUFHbEI7RUFFQU0sT0FBTyxHQUFFO0lBRUwsSUFBSSxDQUFDSCxTQUFTLENBQUNJLE1BQU0sR0FBRyxNQUFLO01BQ3pCLElBQUksQ0FBQ1AsR0FBRyxDQUFDUSxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO01BQ2xDLElBQUksQ0FBQ1IsR0FBRyxDQUFDUyxTQUFTLENBQUMsSUFBSSxDQUFDTixTQUFTLEVBQUUsSUFBSSxDQUFDRixDQUFDLEVBQUUsSUFBSSxDQUFDQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUVoRSxDQUFDO0lBSURRLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsU0FBUyxFQUFHQyxDQUFDLElBQUs7TUFFeEMsSUFBSUEsQ0FBQyxDQUFDQyxHQUFHLEtBQUssWUFBWSxJQUFJRCxDQUFDLENBQUNDLEdBQUcsS0FBSyxPQUFPLEVBQUU7UUFDN0MsSUFBSSxDQUFDWixDQUFDLElBQUksRUFBRTtRQUNaYSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNkLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUNELEdBQUcsQ0FBQ1EsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztRQUNsQyxJQUFJLENBQUNSLEdBQUcsQ0FBQ1MsU0FBUyxDQUFDLElBQUksQ0FBQ04sU0FBUyxFQUFFLElBQUksQ0FBQ0YsQ0FBQyxFQUFFLElBQUksQ0FBQ0MsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7TUFDaEU7TUFDQSxJQUFJVSxDQUFDLENBQUNDLEdBQUcsS0FBSyxXQUFXLElBQUlELENBQUMsQ0FBQ0MsR0FBRyxLQUFLLE1BQU0sRUFBRTtRQUMzQyxJQUFJLENBQUNaLENBQUMsSUFBSSxFQUFFO1FBQ1osSUFBSSxDQUFDRCxHQUFHLENBQUNRLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7UUFDbEMsSUFBSSxDQUFDUixHQUFHLENBQUNTLFNBQVMsQ0FBQyxJQUFJLENBQUNOLFNBQVMsRUFBRSxJQUFJLENBQUNGLENBQUMsRUFBRSxJQUFJLENBQUNDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO01BQ2hFO0lBQ0osQ0FBQyxDQUFDO0VBR047RUFFQWMsU0FBUyxHQUFFO0lBQ1AsSUFBSSxDQUFDZixDQUFDLElBQUksRUFBRTtFQUVoQjtFQUVBZ0IsUUFBUSxHQUFFO0lBQ04sSUFBSSxDQUFDaEIsQ0FBQyxJQUFJLEVBQUU7RUFDaEI7RUFFQWlCLFdBQVcsR0FBRSxDQUViO0VBRUFDLFdBQVcsR0FBRSxDQUViO0FBTUo7QUFHQSwrREFBZXJCLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0X3Byb2plY3QvLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanM/NjQ3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5jbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKGN0eCl7XG4gICAgICAgIHRoaXMueCA9IC0zMDtcbiAgICAgICAgdGhpcy55ID0gNTU7XG4gICAgICAgIHRoaXMuYXN0cm9uYXV0ID0gbmV3IEltYWdlKClcbiAgICAgICAgdGhpcy5hc3Ryb25hdXQuc3JjID0gXCJzcmMvYXNzZXRzL2FzdHJvbmF1dC5wbmdcIlxuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgXG4gICAgXG4gICAgfVxuXG4gICAgYW5pbWF0ZSgpe1xuICAgICAgIFxuICAgICAgICB0aGlzLmFzdHJvbmF1dC5vbmxvYWQgPSAoKT0+IHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCA4MDAsIDM0MClcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmFzdHJvbmF1dCwgdGhpcy54LCB0aGlzLnksIDE1MCwgMTUwKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgICAgXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG5cbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0Fycm93UmlnaHQnIHx8IGUua2V5ID09PSAnUmlnaHQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54ICs9IDMwXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy54KVxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCA4MDAsIDM0MClcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5hc3Ryb25hdXQsIHRoaXMueCwgdGhpcy55LCAxNTAsIDE1MCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdBcnJvd0xlZnQnIHx8IGUua2V5ID09PSAnTGVmdCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnggLT0gMzBcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgODAwLCAzNDApXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuYXN0cm9uYXV0LCB0aGlzLngsIHRoaXMueSwgMTUwLCAxNTApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgXG4gICAgfVxuXG4gICAgbW92ZVJpZ2h0KCl7XG4gICAgICAgIHRoaXMueCArPSAxMFxuICAgICAgICBcbiAgICB9XG5cbiAgICBtb3ZlTGVmdCgpe1xuICAgICAgICB0aGlzLnggLT0gMTBcbiAgICB9XG5cbiAgICByaWdodEFuc3dlcigpe1xuXG4gICAgfVxuXG4gICAgd3JvbmdBbnN3ZXIoKXtcblxuICAgIH1cblxuICAgIFxuICAgICBcblxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyIl0sIm5hbWVzIjpbIlBsYXllciIsImNvbnN0cnVjdG9yIiwiY3R4IiwieCIsInkiLCJhc3Ryb25hdXQiLCJJbWFnZSIsInNyYyIsImFuaW1hdGUiLCJvbmxvYWQiLCJjbGVhclJlY3QiLCJkcmF3SW1hZ2UiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwia2V5IiwiY29uc29sZSIsImxvZyIsIm1vdmVSaWdodCIsIm1vdmVMZWZ0IiwicmlnaHRBbnN3ZXIiLCJ3cm9uZ0Fuc3dlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/player.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0X3Byb2plY3QvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;
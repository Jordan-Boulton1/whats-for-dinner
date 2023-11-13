/* jshint esversion: 11 */
// Wait for DOM to load and add event listener to search button
// Call search recipe api
document.addEventListener("DOMContentLoaded", function () {

  const searchBtn = document.getElementById('search-btn');
  searchBtn.addEventListener("click", function (event) {
    event.preventDefault();
    const searchInput = document.getElementById('search-term').value;
    searchRecipeApi(searchInput);
  });
});

/**
 * function that calls the recipe api
 * @param ingredientValue - ingredient provided by the user in order to get recipes from the api. 
 */
function searchRecipeApi(ingredientValue) {
  console.log(ingredientValue)
  const apiKey = exportApiKey();
  const appId = exportApiId();
  let recipeUrl = `https://api.edamam.com/api/recipes/v2?app_id=${appId}&app_key=${apiKey}&type=any&q=${ingredientValue}`;
  var xhttp = new XMLHttpRequest();

  xhttp.open("GET", recipeUrl);
  xhttp.send();
  xhttp.responseType = "json";
  // onload processes the request, then when the request is processed we evaluate
  // the response by checking if the ready state is ready and completed (4)
  // and that the status is "Ok" (200)
  xhttp.onload = () => {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      console.log(xhttp.response);
      var returnedRecipes = filterReturnedRecipes(xhttp.response.hits);
      console.log(returnedRecipes);
    }
  }
}

/**
 * function that selects 4 random recipes from the array of the api call.
 * @param recipeArray - recipes from the api call.
 * @returns a 4 length version of the recipe api call.
 */
function filterReturnedRecipes(recipeArray) {
  var maxRecipes = 4;
  var randomRecipes = [];
  for (let i = 0; i < maxRecipes; i++) {
    var randomRecipeIndex = Math.floor(Math.random() * recipeArray.length);
    var randomItem = recipeArray[randomRecipeIndex];
    randomRecipes.push(randomItem);
  }
  return randomRecipes;
}

// export api secrets using Obfuscator Tool
(function (_0x2d6de4, _0x447697) { var _0x1449e4 = _0x36fa, _0x340011 = _0x2d6de4(); while (!![]) { try { var _0x5e9070 = parseInt(_0x1449e4(0x8e)) / 0x1 * (-parseInt(_0x1449e4(0x8b)) / 0x2) + -parseInt(_0x1449e4(0x8a)) / 0x3 * (-parseInt(_0x1449e4(0x89)) / 0x4) + -parseInt(_0x1449e4(0x8c)) / 0x5 * (parseInt(_0x1449e4(0x90)) / 0x6) + -parseInt(_0x1449e4(0x8f)) / 0x7 + parseInt(_0x1449e4(0x87)) / 0x8 * (parseInt(_0x1449e4(0x86)) / 0x9) + parseInt(_0x1449e4(0x91)) / 0xa * (-parseInt(_0x1449e4(0x88)) / 0xb) + parseInt(_0x1449e4(0x8d)) / 0xc; if (_0x5e9070 === _0x447697) break; else _0x340011['push'](_0x340011['shift']()); } catch (_0x3cbeac) { _0x340011['push'](_0x340011['shift']()); } } }(_0x4d5b, 0x377e6)); function _0x36fa(_0x34192f, _0x5edefa) { var _0x4d5bac = _0x4d5b(); return _0x36fa = function (_0x36fa3c, _0x4602b9) { _0x36fa3c = _0x36fa3c - 0x86; var _0x2ad8fc = _0x4d5bac[_0x36fa3c]; return _0x2ad8fc; }, _0x36fa(_0x34192f, _0x5edefa); } function exportApiKey() { var _0x41c62e = _0x36fa; return _0x41c62e(0x92); } function _0x4d5b() { var _0x3369a0 = ['171610QTEegG', 'b96515dd93f73bd18b24f8ad89471b4b', '3446127tUBvtr', '8gWkgvX', '11TcYkDm', '8eyCOot', '217182GbcsPZ', '16608yTZuiV', '60AMvcmx', '4052748CuXcIa', '1JaDRep', '1759331UWQSLb', '180660uByADv']; _0x4d5b = function () { return _0x3369a0; }; return _0x4d5b(); } exportApiKey();
(function (_0x36f542, _0x2fc93c) { var _0x3aad74 = _0x12c6, _0x550034 = _0x36f542(); while (!![]) { try { var _0x5f07b3 = parseInt(_0x3aad74(0x1be)) / 0x1 + parseInt(_0x3aad74(0x1b8)) / 0x2 * (-parseInt(_0x3aad74(0x1c2)) / 0x3) + -parseInt(_0x3aad74(0x1bc)) / 0x4 * (-parseInt(_0x3aad74(0x1b6)) / 0x5) + parseInt(_0x3aad74(0x1bd)) / 0x6 * (parseInt(_0x3aad74(0x1c0)) / 0x7) + parseInt(_0x3aad74(0x1c3)) / 0x8 * (-parseInt(_0x3aad74(0x1bf)) / 0x9) + parseInt(_0x3aad74(0x1bb)) / 0xa * (parseInt(_0x3aad74(0x1ba)) / 0xb) + parseInt(_0x3aad74(0x1c1)) / 0xc * (-parseInt(_0x3aad74(0x1b9)) / 0xd); if (_0x5f07b3 === _0x2fc93c) break; else _0x550034['push'](_0x550034['shift']()); } catch (_0x2061c0) { _0x550034['push'](_0x550034['shift']()); } } }(_0x592a, 0x37228)); function exportApiId() { var _0x109e81 = _0x12c6; return _0x109e81(0x1b7); } function _0x12c6(_0x147adc, _0x9f25f7) { var _0x592abd = _0x592a(); return _0x12c6 = function (_0x12c6e3, _0x195f1f) { _0x12c6e3 = _0x12c6e3 - 0x1b6; var _0x27e2b4 = _0x592abd[_0x12c6e3]; return _0x27e2b4; }, _0x12c6(_0x147adc, _0x9f25f7); } exportApiId(); function _0x592a() { var _0x1133a3 = ['3203656QOOEiY', '6325CtkMQy', 'e0a6e02b', '2BtRqJz', '11986oBJsns', '11sgHKqK', '2922910qDhPSQ', '1028JMELSf', '42gJVTuc', '159491fTcSjd', '9ZueAIQ', '259112yjjrgp', '5088CNKXQj', '56346QEhlWq']; _0x592a = function () { return _0x1133a3; }; return _0x592a(); }
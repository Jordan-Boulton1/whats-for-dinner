/* jshint esversion: 11 */

const htmlParser = new DOMParser();

/**
 * function that calls the recipe api
 * @param ingredientValue - ingredient provided by the user in order to get recipes from the api. 
 */
function searchRecipeApi(event) {
  event.preventDefault();
  var form = new FormData(event.target);
  var ingredientValue = form.get("search");
  console.log(ingredientValue)
  const apiKey = exportApiKey();
  const appId = exportApiId();
  let recipeUrl = `https://api.edamam.com/api/recipes/v2?app_id=${appId}&app_key=${apiKey}&type=any&q=${ingredientValue}&mealType=Dinner`;
  var xhttp = new XMLHttpRequest();

  xhttp.open("GET", recipeUrl);
  xhttp.send();
  xhttp.responseType = "json";
  // onload processes the request, then when the request is processed we evaluate
  // the response by checking if the ready state is ready and completed (4)
  // and that the status is "Ok" (200)
  xhttp.onload = () => {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      var errorHandler = document.getElementById('error-handler');
      errorHandler.innerHTML = "";
      if (xhttp.response.hits.length == 0) {
        errorHandler.innerHTML = "Sorry we couldn't find what you were looking for.";
        return;
      }
      var returnedRecipes = filterReturnedRecipes(xhttp.response.hits);
      let recipeContainer = document.getElementById('returned-recipe-container');
      console.log(returnedRecipes)
      recipeContainer.innerHTML = "";
      // loops through the 4 random recipes returned
      for (let i = 0; i < returnedRecipes.length; i++) {
        renderRecipes(returnedRecipes[i], recipeContainer);
      }
    }
  }
}

/**
 * function that selects 8 random recipes from the array of the api call and 
 * ensures there are no duplicates.
 * @param recipeArray - recipes from the api call.
 * @returns a 8 length version of the recipe api call.
 */
function filterReturnedRecipes(recipeArray) {
  var maxRecipes = 8;
  var randomRecipes = [];
  for (let i = 0; i < maxRecipes; i++) {
    var randomItem = selectRandomItem(recipeArray);
    if (randomRecipes.length > 0 && randomRecipes.find(x => x.label == randomItem.recipe.label)) {
      randomItem = selectRandomItem(recipeArray);
    }
    randomRecipes.push(randomItem.recipe);
  }
  return randomRecipes;
}

/**
 * select a random item from the input array
 * @param recipeArray an array of elements
 * @returns a random item from the array of elements
 */
function selectRandomItem(recipeArray) {
  var randomRecipeIndex = Math.floor(Math.random() * recipeArray.length);
  return recipeArray[randomRecipeIndex];
}

/**
 * renders recipes into html and appends them to the "returned-recipe-container" section.
 * @param recipe - a single recipe item
 * @param recipeContainer - the parent element which the recipe item is injected into. 
 */
function renderRecipes(recipe, recipeContainer) {
  let recipeTime = recipe.totalTime == 0 ? 30 : recipe.totalTime;
  var recipeCard = `
  <div class="recipe-card">
  <a href="${recipe.url}" target="_blank">
    <aside>
      <img src=${recipe.images.REGULAR.url} alt="">
    </aside>
    <article>
      <h2>${recipe.label}</h2>
      <ul class="recipe-info">
        <li><span class="icon fa-solid fa-users"></span><span>${recipe.yield}</span></li>
        <li><span class="icon fa-solid fa-clock"></span><span>${recipeTime}</span></li>
        <li><span class="icon fa-solid fa-fire"></span><span>${Math.round(recipe.calories)}</span></li>
      </ul>
      <h3 class="cuisine-type">${recipe.cuisineType.toString()}</h3>
      <p class="recipe-ingredients"><ul class="ingredient-list">${renderIngredients(recipe.ingredients).join("")}</ul></p>
    </article>
    </a>
  </div>
  `

  // takes the text above and transforms into html
  var recipeCardDocument = htmlParser.parseFromString(recipeCard, 'text/html');
  // takes recipe card div from the created document
  var recipeCardHtml = recipeCardDocument.body.getElementsByTagName('div')[0];
  // takes returned recipe container and appends the recipe card to html
  recipeContainer.appendChild(recipeCardHtml);
}

/**
 * Loops through the recipe ingredients array and renders them in the form of a list item
 * @param ingredientLines is the collection of ingredient from the recipe
 * @returns the ingredient text as a rendered "li"
 */
function renderIngredients(ingredientLines) {
  var renderedIngredients = [];
  for (let i = 0; i < ingredientLines.length; i++) {
    var ingredientLine = `<li>${ingredientLines[i].text}</li>`
    renderedIngredients.push(ingredientLine);
  }
  return renderedIngredients;
}


// export api secrets using Obfuscator Tool
(function (_0x2d6de4, _0x447697) { var _0x1449e4 = _0x36fa, _0x340011 = _0x2d6de4(); while (!![]) { try { var _0x5e9070 = parseInt(_0x1449e4(0x8e)) / 0x1 * (-parseInt(_0x1449e4(0x8b)) / 0x2) + -parseInt(_0x1449e4(0x8a)) / 0x3 * (-parseInt(_0x1449e4(0x89)) / 0x4) + -parseInt(_0x1449e4(0x8c)) / 0x5 * (parseInt(_0x1449e4(0x90)) / 0x6) + -parseInt(_0x1449e4(0x8f)) / 0x7 + parseInt(_0x1449e4(0x87)) / 0x8 * (parseInt(_0x1449e4(0x86)) / 0x9) + parseInt(_0x1449e4(0x91)) / 0xa * (-parseInt(_0x1449e4(0x88)) / 0xb) + parseInt(_0x1449e4(0x8d)) / 0xc; if (_0x5e9070 === _0x447697) break; else _0x340011['push'](_0x340011['shift']()); } catch (_0x3cbeac) { _0x340011['push'](_0x340011['shift']()); } } }(_0x4d5b, 0x377e6)); function _0x36fa(_0x34192f, _0x5edefa) { var _0x4d5bac = _0x4d5b(); return _0x36fa = function (_0x36fa3c, _0x4602b9) { _0x36fa3c = _0x36fa3c - 0x86; var _0x2ad8fc = _0x4d5bac[_0x36fa3c]; return _0x2ad8fc; }, _0x36fa(_0x34192f, _0x5edefa); } function exportApiKey() { var _0x41c62e = _0x36fa; return _0x41c62e(0x92); } function _0x4d5b() { var _0x3369a0 = ['171610QTEegG', 'b96515dd93f73bd18b24f8ad89471b4b', '3446127tUBvtr', '8gWkgvX', '11TcYkDm', '8eyCOot', '217182GbcsPZ', '16608yTZuiV', '60AMvcmx', '4052748CuXcIa', '1JaDRep', '1759331UWQSLb', '180660uByADv']; _0x4d5b = function () { return _0x3369a0; }; return _0x4d5b(); } exportApiKey();
(function (_0x36f542, _0x2fc93c) { var _0x3aad74 = _0x12c6, _0x550034 = _0x36f542(); while (!![]) { try { var _0x5f07b3 = parseInt(_0x3aad74(0x1be)) / 0x1 + parseInt(_0x3aad74(0x1b8)) / 0x2 * (-parseInt(_0x3aad74(0x1c2)) / 0x3) + -parseInt(_0x3aad74(0x1bc)) / 0x4 * (-parseInt(_0x3aad74(0x1b6)) / 0x5) + parseInt(_0x3aad74(0x1bd)) / 0x6 * (parseInt(_0x3aad74(0x1c0)) / 0x7) + parseInt(_0x3aad74(0x1c3)) / 0x8 * (-parseInt(_0x3aad74(0x1bf)) / 0x9) + parseInt(_0x3aad74(0x1bb)) / 0xa * (parseInt(_0x3aad74(0x1ba)) / 0xb) + parseInt(_0x3aad74(0x1c1)) / 0xc * (-parseInt(_0x3aad74(0x1b9)) / 0xd); if (_0x5f07b3 === _0x2fc93c) break; else _0x550034['push'](_0x550034['shift']()); } catch (_0x2061c0) { _0x550034['push'](_0x550034['shift']()); } } }(_0x592a, 0x37228)); function exportApiId() { var _0x109e81 = _0x12c6; return _0x109e81(0x1b7); } function _0x12c6(_0x147adc, _0x9f25f7) { var _0x592abd = _0x592a(); return _0x12c6 = function (_0x12c6e3, _0x195f1f) { _0x12c6e3 = _0x12c6e3 - 0x1b6; var _0x27e2b4 = _0x592abd[_0x12c6e3]; return _0x27e2b4; }, _0x12c6(_0x147adc, _0x9f25f7); } exportApiId(); function _0x592a() { var _0x1133a3 = ['3203656QOOEiY', '6325CtkMQy', 'e0a6e02b', '2BtRqJz', '11986oBJsns', '11sgHKqK', '2922910qDhPSQ', '1028JMELSf', '42gJVTuc', '159491fTcSjd', '9ZueAIQ', '259112yjjrgp', '5088CNKXQj', '56346QEhlWq']; _0x592a = function () { return _0x1133a3; }; return _0x592a(); }
/*jshint esversion: 11*/

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
  callApi(ingredientValue);
}

function callApi(ingredientValue) {
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
      // loops through the 8 random recipes returned
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
    let randomItem = selectRandomItem(recipeArray);
    if (randomRecipes.filter(e => e.Id === randomItem.recipe.Id).length > 0) {
      var randomItem = selectRandomItem(recipeArray);
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
  // get the recipe id from the api
  let randomItem = recipeArray[randomRecipeIndex];
  let randomItemId = randomItem.recipe.uri.substring(randomItem.recipe.uri.indexOf("_") + 1);
  randomItem.recipe.Id = randomItemId;
  return randomItem;
}

/**
 * renders recipes into html and appends them to the "returned-recipe-container" section.
 * @param recipe - a single recipe item
 * @param recipeContainer - the parent element which the recipe item is injected into. 
 */
function renderRecipes(recipe, recipeContainer) {
  let recipeTime = recipe.totalTime == 0 ? 30 : recipe.totalTime;
  var recipeCard = `
  <div class="recipe-card" id="${recipe.Id}">
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
      <button type="button" class="collapsible" onclick="expandIngredients(\``+ recipe.Id + `\`)">∨</button>
      <div class="content" id="content-${recipe.Id}">
        <p class="recipe-ingredients"><ul class="ingredient-list">${renderIngredients(recipe.ingredients).join("")}</ul></p>
      </div>
    </article>
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

function randomButton() {
  var randomItemsArray = new Array("chicken", "beef", "breadcrumbs", "tomato paste", "eggs", "sushi", "prawns", "wraps", "pasta", "rice", "fish", "peppers", "cheese", "curry");
  var getRandomItem = randomItemsArray[Math.floor(Math.random() * randomItemsArray.length)];

  callApi(getRandomItem);
}
/*jshint esversion: 11*/

const htmlParser = new DOMParser();
loadCache();

function loadCache() {
  let getRecipesFromCache = localStorage.getItem("cached-recipes");
  if (getRecipesFromCache == null) {
    return;
  }
  getRecipesFromCache = JSON.parse(getRecipesFromCache);
  let recipeContainer = document.getElementById('returned-recipe-container');
  recipeContainer.innerHTML = "";
  renderRecipes(getRecipesFromCache, recipeContainer);
}

document.getElementById('random-btn').addEventListener("click", function (event) {
  event.preventDefault();
  randomButton();
});

/**
 * Creates an array of ingredients/food. Selects a random item from the array
 *  and calls the recipe api with that random item
 */
function randomButton() {
  document.getElementById("search-term").value = "";
  let randomItemsArray = new Array("chicken", "beef", "breadcrumbs", "tomato paste", "eggs", "sushi", "prawns", "wraps", "pasta", "rice", "fish", "peppers", "cheese", "curry");
  let getRandomItem = randomItemsArray[Math.floor(Math.random() * randomItemsArray.length)];

  callApi(getRandomItem);
}

document.getElementById('search-btn').addEventListener("click", function (event) {
  event.preventDefault();
  let ingredientValue = document.getElementById("search-term").value;
  callApi(ingredientValue);
});

/**
 * The function opens a connection to the recipe api using XMLHttpRequest.
 * @param ingredientValue - expects a value of an ingredient/food
 */
function callApi(ingredientValue) {
  const apiKey = exportApiKey();
  const appId = exportApiId();
  let recipeUrl = `https://api.edamam.com/api/recipes/v2?app_id=${appId}&app_key=${apiKey}&type=any&q=${ingredientValue}&mealType=Dinner`;
  let xhttp = new XMLHttpRequest();

  xhttp.open("GET", recipeUrl);
  xhttp.send();
  xhttp.responseType = "json";

  // onload processes the request, then when the request is processed we evaluate
  // the response by checking if the ready state is ready and completed (4)
  // and that the status is "Ok" (200)
  xhttp.onload = () => {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      handleApiResponse(xhttp.response);
    }
  };
}

/**
 * Grabs the error handler paragraph and the container which will be used to load the api data.
 * If the api returns 0 hits, an error message will be displayed into the error handler paragraph
 * and the container will be cleared. If the api returns hits, the hits will be cleaned up and
 * rendered into the container.
 * @param apiResponse - expects the body of a completed and successful api call
 * @returns - breaks the execution of the function when there are no hits.
 */
function handleApiResponse(apiResponse) {
  let errorHandler = document.getElementById('error-handler');
  let recipeContainer = document.getElementById('returned-recipe-container');
  recipeContainer.innerHTML = "";
  errorHandler.innerHTML = "";
  if (apiResponse.hits.length == 0) {
    errorHandler.innerHTML = "Sorry we couldn't find what you were looking for. <br> Please enter new ingredients and try again.";
    recipeContainer.innerHTML = "";
    return;
  }

  let eightUniqueRecipes = cleanupRecipeArrayFromApi(apiResponse.hits);
  renderRecipes(eightUniqueRecipes, recipeContainer);
}

/**
 * Gets recipes from the api hits with an assigned id, filters any faulty recipes that are known and
 * gets 8 unique recipes from the recipes with an assigned id and stores them in local storage.
 * @param apiRecipes - expects hits from the api
 * @returns - 8 unique recipes from the recipes with an assigned id.
 */
function cleanupRecipeArrayFromApi(apiRecipes) {
  let recipesWithIds = mapRecipesWithIds(apiRecipes);
  recipesWithIds = filterFaultyRecipesFromApi(recipesWithIds);
  let randomUniqueRecipes = getRandomUniqueRecipes(recipesWithIds, 8);
  localStorage.setItem("cached-recipes", JSON.stringify(randomUniqueRecipes));
  return randomUniqueRecipes;
}

/**
 * The 20 returned hits from the api are looped through to get the recipe id from the uri and
 * added into a new array that will store only the recipes from the 20 hits with an assigned id.
 * @param recipeArray - expects hits from the api
 * @returns 20 recipes with assigned ids.
 */
function mapRecipesWithIds(recipeArray) {
  let recipesWithIds = [];
  for (let i = 0; i < recipeArray.length; i++) {
    let recipeId = recipeArray[i].recipe.uri.substring(recipeArray[i].recipe.uri.indexOf("_") + 1);
    recipeArray[i].recipe.Id = recipeId;
    recipesWithIds.push(recipeArray[i].recipe);
  }
  return recipesWithIds;
}

/**
 * filters through the array to ensure the items with these specified ids are removed.
 * @param recipesWithIds - 20 recipes with assigned ids
 * @returns a filtered array without these ids
 */
function filterFaultyRecipesFromApi(recipesWithIds) {
  return recipesWithIds.filter(item =>
    item.Id != "b2cb2273a19b40ad4b2ee01181de2f67" &&
    item.Id != "b6059ba07ff9441a76572ba622c6ed83" &&
    item.Id != "feae839eb15c7959e1fbafa8ffb2c7df" &&
    item.Id != "24ef4d12d940a7afe7cc491561354132" &&
    item.Id != "3c9621517f60ff37eaec13587b7730ef");
}

/**
 * duplicates the original array of 20 recipes with assigned ids and shuffles the array 
 * and slices from index 0 to the specified count.
 * @param recipesWithIds - the array of 20 recipes with assigned ids
 * @param count - amount of recipes to return
 * @returns recipes from index 0 to the specified count.
 */
function getRandomUniqueRecipes(recipesWithIds, count) {
  const copyOfRecipesWithIds = recipesWithIds.slice(); // Create a copy to avoid modifying the original array
  shuffleArray(copyOfRecipesWithIds);
  return copyOfRecipesWithIds.slice(0, count);
}

/**
 * Creates a loop that starts from the end of the array gets a random index and swaps the position
 * with the current index
 * @param array - the copied array of 20 recipes with assigned ids
 */
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

/**
 * loops through the 8 random recipes and renders recipes into html and appends 
 * them to the "returned-recipe-container" section.
 * @param recipeArray - expects an array of 8 random recipes
 * @param recipeContainer - the parent element which the recipe item is injected into. 
 */
function renderRecipes(recipeArray, recipeContainer) {
  // loops through the 8 random recipes
  for (let i = 0; i < recipeArray.length; i++) {
    let recipeCardDocument = buildHtmlForRecipeCard(recipeArray[i]);
    // takes recipe card div from the created document
    let recipeCardHtml = recipeCardDocument.body.getElementsByTagName('div')[0];
    // takes returned recipe container and appends the recipe card to html
    recipeContainer.appendChild(recipeCardHtml);
    addFunctionalityToCardButton(recipeArray[i].Id);
  }
}

/**
 * validates the total time of a recipe and sets it to 30 mins by default.
 * creates a card which has the unique recipe id and the unique recipe information
 * returned by the api. 
 * @param recipe - current recipe within the loop
 * @returns the created card as html
 */
function buildHtmlForRecipeCard(recipe) {
  let recipeTime = recipe.totalTime == 0 ? 30 : recipe.totalTime;
  let recipeCard = `
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
      <button type="button active-btn" class="ingredient-btn" id="btn-${recipe.Id}">Show</button>
      <div class="content" id="content-${recipe.Id}">
        <p class="recipe-ingredients"><ul class="ingredient-list">${renderIngredients(recipe.ingredients).join("")}</ul></p>
        <a href="${recipe.url}" target="_blank" aria-label="takes you to the recipe website (opens in new tab)"><button type="button" id="recipe-link-btn">View Recipe</button></a>
      </div>
    </article>
  </div>
  `;
  return htmlParser.parseFromString(recipeCard, 'text/html');
}

/**
 * Loops through the recipe ingredients array and renders them in the form of a list item
 * @param ingredientLines is the collection of ingredient from the recipe
 * @returns the ingredient text as a rendered "li"
 */
function renderIngredients(ingredientLines) {
  let renderedIngredients = [];
  for (let i = 0; i < ingredientLines.length; i++) {
    let ingredientLine = `<li>${ingredientLines[i].text}</li>`;
    renderedIngredients.push(ingredientLine);
  }
  return renderedIngredients;
}

/**
 * gets the button on the recipe card by id and adds an onclick event listener which expands
 * the list of ingredient returned by the api.
 * @param recipeId - the id of the current recipe
 */
function addFunctionalityToCardButton(recipeId) {
  document.getElementById("btn-" + recipeId).addEventListener("click", function (event) {
    event.preventDefault();
    expandIngredients(recipeId);
  });
}

/**
 * gets the container that holds the ingredient list and the expand button by ids and when clicked
 * gives the container a class of active, when active the buttons text changes to 'Hide' and 
 * displays the ingredients otherwise when clicked again the ingredients are hidden and the button
 * text changes to 'Show'.
 * @param recipeId - the id of the current recipe
 */
function expandIngredients(recipeId) {
  let expandContent = document.getElementById("content-" + recipeId);
  let expandBtn = document.getElementById("btn-" + recipeId);
  expandContent.classList.toggle("active");
  if (expandContent.style.display === "block") {
    expandBtn.innerHTML = "Show";
    expandContent.style.display = "none";
  } else {
    expandBtn.innerHTML = "Hide";
    expandContent.style.display = "block";
  }
}
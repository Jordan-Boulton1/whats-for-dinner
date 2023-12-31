/*jshint esversion: 11*/

const htmlParser = new DOMParser();
const apiKey = exportApiKey();
const appId = exportApiId();

loadCache();

/**
 * checks if there is recipe ids in local storage, if no break out of function. 
 * If something is in local storage gets it and parses it as an json array then calls 
 * the rendered recipes cards to the html.
 * @returns - breaks out of code function
 */
function loadCache() {
  let getRecipesFromCache = localStorage.getItem("cached-recipes");
  let getLastEnteredValue = localStorage.getItem("lastEnteredValue");
  let searchTerm = document.getElementById("search-term");
  getLastEnteredValue == null ? searchTerm.value = "" : searchTerm.value = getLastEnteredValue;
  if (getRecipesFromCache == null) {
    return;
  }
  getRecipesFromCache = JSON.parse(getRecipesFromCache);
  callApiByIdsAndRenderRecipes(getRecipesFromCache);

}

document.getElementById('random-btn').addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.removeItem("lastEnteredValue");
  randomButton();
});

/**
 * The function opens a connection to the recipe api using XMLHttpRequest to get by recipe id
 * and renders the returned recipe to the html
 * @param recipeIdsFromCache - array of cached ids
 */
function callApiByIdsAndRenderRecipes(recipeIdsFromCache) {
  let recipeContainer = document.getElementById('returned-recipe-container');
  recipeContainer.innerHTML = "";
  for (let i = 0; i < recipeIdsFromCache.length; i++) {
    let recipeUrl = `https://api.edamam.com/api/recipes/v2/${recipeIdsFromCache[i]}?app_id=${appId}&app_key=${apiKey}&type=public`;
    let xhttp = new XMLHttpRequest();

    xhttp.open("GET", recipeUrl);
    xhttp.send();
    xhttp.responseType = "json";

    handleCompletedRequest(xhttp, recipeIdsFromCache[i], recipeContainer);
  }
}

/**
 * processes the completed API request and assigns an ID to the recipe
 * @param xhttp - xmlhttprequest which handles the connection to the API
 * @param recipeId - the id of the recipe
 * @param recipeContainer - html container for the recipe cards.
 */
function handleCompletedRequest(xhttp, recipeId, recipeContainer) {
  xhttp.onload = () => {
    // onload processes the request, then when the request is processed we evaluate
    // the response by checking if the ready state is ready and completed (4)
    // and that the status is "Ok" (200) 
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      let recipe = xhttp.response.recipe;
      recipe.Id = recipeId;
      renderRecipesFromCache(recipe, recipeContainer);
    } else if (xhttp.status == 429) {
      setTimeout(8000);
      handleCompletedRequest(xhttp, recipeId, recipeContainer);
    }
  };
}

/**
 * takes a single recipe item from the API, builds a card with the recipe data 
 * and loads the recipe into the recipe container.
 * @param recipe - single recipe from the API.
 * @param recipeContainer - html container for the recipe cards.
 */
function renderRecipesFromCache(recipe, recipeContainer) {
  let recipeCardDocument = buildHtmlForRecipeCard(recipe);
  // takes recipe card div from the created document
  let recipeCardHtml = recipeCardDocument.body.getElementsByTagName('div')[0];
  // takes returned recipe container and appends the recipe card to html
  recipeContainer.appendChild(recipeCardHtml);
  addFunctionalityToCardButton(recipe.Id);
}

document.getElementById("clear-btn").addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("search-term").value = "";
  document.getElementById("returned-recipe-container").innerHTML = "";
  localStorage.clear();
})

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
  let ingredientValue = document.getElementById("search-term");
  let errorHandler = document.getElementById('error-handler');

  // Define a regular expression for the pattern of text separated by space
  const regex = /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/;
  if (ingredientValue.value === "") {
    errorHandler.innerHTML = "Please provide a valid search term";
    return; //Breaks code execution
  }

  //Tests the input from the field against the allowed patterns, if its false, meaning the test failed, show the error handler
  if (regex.test(ingredientValue.value)) {
    localStorage.setItem("lastEnteredValue", ingredientValue.value);
    callApi(ingredientValue.value);
    return;
  }
  errorHandler.innerHTML = "Please provide a valid search term";
  return;//Breaks code execution

});

/**
 * The function opens a connection to the recipe api using XMLHttpRequest.
 * @param ingredientValue - expects a value of an ingredient/food
 */
function callApi(ingredientValue) {
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
    else if (xhttp.status == 429) {
      setTimeout(8000);
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
  let randomUniqueIds = randomUniqueRecipes.map(item => item.Id);
  localStorage.setItem("cached-recipes", JSON.stringify(randomUniqueIds));
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
 * removes duplicate and faulty ids from the recipe
 * filters through the array to ensure the items with these specified ids are removed.
 * @param recipesWithIds - 20 recipes with assigned ids
 * @returns a filtered array without these ids
 */
function filterFaultyRecipesFromApi(recipesWithIds) {
  return recipesWithIds.filter(item =>
    item.Id != "b2cb2273a19b40ad4b2ee01181de2f67" && // Rainbow rice - duplicate recipe with a different ID.
    item.Id != "b6059ba07ff9441a76572ba622c6ed83" && // Spanish Garlic Prawns - extremely small image causing card to not render properly.
    item.Id != "feae839eb15c7959e1fbafa8ffb2c7df" && // Crisp Sushi-Rice Cakes - duplicate recipe with a different ID.
    item.Id != "24ef4d12d940a7afe7cc491561354132" && // Individual Coconut Cakes - extremely small image causing card to not render properly.
    item.Id != "99108913a82294bb61543d534ea06b43" && // Spicy Tuna & Avocado Chirashi - domain no longer live.
    item.Id != "3c9621517f60ff37eaec13587b7730ef");  // Individual Chocolate and Peanut Butter Bundt Cakes - extremely small image causing card to not render properly.
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
        <a id="recipe-link-btn" href="${recipe.url}" target="_blank" aria-label="takes you to the recipe website (opens in new tab)">View Recipe</a>
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
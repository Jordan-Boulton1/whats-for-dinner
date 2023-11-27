/*jshint esversion: 11*/

const htmlParser = new DOMParser();

/**
 * function that calls the recipe api
 * @param ingredientValue - ingredient provided by the user in order to get recipes from the api. 
 */
function searchRecipeApi(event) {
  event.preventDefault();
  let form = new FormData(event.target);
  let ingredientValue = form.get("search");
  console.log(ingredientValue);
  callApi(ingredientValue);
}

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
      let errorHandler = document.getElementById('error-handler');
      errorHandler.innerHTML = "";
      if (xhttp.response.hits.length == 0) {
        errorHandler.innerHTML = "Sorry we couldn't find what you were looking for. <br> Please enter new ingredients and try again.";
        return;
      }

      let recipesWithIds = selectUniqueRecipes(xhttp.response.hits);
      recipesWithIds = filterFaultyRecipesFromApi(recipesWithIds);
      console.log(recipesWithIds);
      let recipeContainer = document.getElementById('returned-recipe-container');
      let randomUniqueItems = getRandomUniqueItems(recipesWithIds, 8);
      recipeContainer.innerHTML = "";
      // loops through the 8 random recipes returned
      for (let i = 0; i < randomUniqueItems.length; i++) {
        renderRecipes(randomUniqueItems[i], recipeContainer);
      }
    }
  };
}

function filterFaultyRecipesFromApi(recipesWithIds) {
  console.log(recipesWithIds);
  return recipesWithIds.filter(item => item.Id != "b2cb2273a19b40ad4b2ee01181de2f67" && item.Id != "b6059ba07ff9441a76572ba622c6ed83");
}

function selectUniqueRecipes(recipeArray) {
  let randomUniqueRecipes = [];
  for (let i = 0; i < recipeArray.length; i++) {
    let randomItemId = recipeArray[i].recipe.uri.substring(recipeArray[i].recipe.uri.indexOf("_") + 1);
    recipeArray[i].recipe.Id = randomItemId;
    randomUniqueRecipes.push(recipeArray[i].recipe);
  }
  return randomUniqueRecipes;
}

/**
 * renders recipes into html and appends them to the "returned-recipe-container" section.
 * @param recipe - a single recipe item
 * @param recipeContainer - the parent element which the recipe item is injected into. 
 */
function renderRecipes(recipe, recipeContainer) {
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
      <button type="button active-btn" class="ingredient-btn" onclick="expandIngredients(\``+ recipe.Id + `\`)">Expand</button>
      <div class="content" id="content-${recipe.Id}">
        <p class="recipe-ingredients"><ul class="ingredient-list">${renderIngredients(recipe.ingredients).join("")}</ul></p>
        <a href="${recipe.url}" target="_blank" aria-label="takes you to the recipe website (opens in new tab)"><button type="button" id="recipe-link-btn">View Recipe</button></a>
      </div>
    </article>
  </div>
  `;

  // takes the text above and transforms into html
  let recipeCardDocument = htmlParser.parseFromString(recipeCard, 'text/html');
  // takes recipe card div from the created document
  let recipeCardHtml = recipeCardDocument.body.getElementsByTagName('div')[0];
  // takes returned recipe container and appends the recipe card to html
  recipeContainer.appendChild(recipeCardHtml);
}

function expandIngredients(recipeLabel) {
  let expandButton = document.getElementById("content-" + recipeLabel);
  expandButton.classList.toggle("active")
  if (expandButton.style.display === "block") {
    expandButton.style.display = "none";
  } else {
    expandButton.style.display = "block";
  }
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

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function getRandomUniqueItems(array, count) {
  const shuffledArray = array.slice(); // Create a copy to avoid modifying the original array
  shuffleArray(shuffledArray);
  return shuffledArray.slice(0, count);
}

function randomButton() {
  let randomItemsArray = new Array("chicken", "beef", "breadcrumbs", "tomato paste", "eggs", "sushi", "prawns", "wraps", "pasta", "rice", "fish", "peppers", "cheese", "curry");
  let getRandomItem = randomItemsArray[Math.floor(Math.random() * randomItemsArray.length)];

  callApi(getRandomItem);
}
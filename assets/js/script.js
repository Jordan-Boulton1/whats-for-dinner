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
  let recipeUrl = `https://api.edamam.com/api/recipes/v2?app_id=6769d7f2&app_key=ed3075ed0eed7f281a21698232d312fc&type=any&q=${ingredientValue}`;
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
    var randomRecipeIndex = Math.floor(Math.random() * recipeArray.length) + 1;
    var randomItem = recipeArray[randomRecipeIndex];
    randomRecipes.push(randomItem);
  }
  return randomRecipes;
}
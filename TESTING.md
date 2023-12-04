# Testing

Return back to the [README.md](README.md) file.

## Code Validation

### HTML

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files.

| Page | W3C URL | Screenshot | Notes |
| --- | --- | --- | --- |
| Home | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjordan-boulton1.github.io%2Fwhats-for-dinner%2F) | ![screenshot](https://github.com/Jordan-Boulton1/whats-for-dinner/blob/main/documentation/testing/validation/html-validation.png) | Section lacks header h2-h6 warning |

### CSS

I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate all of my CSS files.

| File | Jigsaw URL | Screenshot | Notes |
| --- | --- | --- | --- |
| style.css | [Jigsaw](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2FJordan-Boulton1.github.io%2Fwhats-for-dinner) | ![screenshot](https://github.com/Jordan-Boulton1/whats-for-dinner/blob/main/documentation/testing/validation/css-validation.png) | Pass: No Errors |

### JavaScript

I have used the recommended [JShint Validator](https://jshint.com) to validate all of my JS files.

| File | Screenshot | Notes |
| --- | --- | --- |
| script.js | ![screenshot](https://github.com/Jordan-Boulton1/whats-for-dinner/blob/main/documentation/testing/validation/js-validation.png) | Unused variables from external files |
| obfuscator.js | ![screenshot](https://github.com/Jordan-Boulton1/whats-for-dinner/blob/main/documentation/testing/validation/obfuscator-validation.png) | Validation warnings due to the obfuscated code |

## Browser Compatibility

I've tested my deployed project on multiple browsers to check for compatibility issues.

| Browser | Home | Expanded Cards | Notes |
| --- | --- | --- | --- |
| Chrome | ![screenshot](https://github.com/Jordan-Boulton1/whats-for-dinner/blob/main/documentation/testing/compatibility/chrome-compatibility.png) | ![screenshot](https://github.com/Jordan-Boulton1/whats-for-dinner/blob/main/documentation/testing/compatibility/chrome-cards-compatibility.png) | Works as expected |
| Firefox | ![screenshot](https://github.com/Jordan-Boulton1/whats-for-dinner/blob/main/documentation/testing/compatibility/firefox-compatibility.png) | ![screenshot](https://github.com/Jordan-Boulton1/whats-for-dinner/blob/main/documentation/testing/compatibility/firefox-cards-compatibility.png) | Works as expected |
| Edge | ![screenshot](https://github.com/Jordan-Boulton1/whats-for-dinner/blob/main/documentation/testing/compatibility/edge-compatibility.png) | ![screenshot](https://github.com/Jordan-Boulton1/whats-for-dinner/blob/main/documentation/testing/compatibility/edge-cards-compatibility.png) | Works as expected |

## Responsiveness

I've tested my deployed project on multiple devices to check for responsiveness issues.

| Device | Home | Cards | Notes |
| --- | --- | --- | --- |
| Mobile (DevTools) | ![screenshot](https://github.com/Jordan-Boulton1/whats-for-dinner/blob/main/documentation/testing/responsiveness/moblie-chrome-responsiveness.png) | ![screenshot](https://github.com/Jordan-Boulton1/whats-for-dinner/blob/main/documentation/testing/responsiveness/mobile-chrome-card-responsiveness.png) | Works as expected |
| Tablet (DevTools) | ![screenshot](https://github.com/Jordan-Boulton1/whats-for-dinner/blob/main/documentation/testing/responsiveness/tablet-chrome-responsiveness.png) | ![screenshot](https://github.com/Jordan-Boulton1/whats-for-dinner/blob/main/documentation/testing/responsiveness/tablet-chrome-card-responsiveness.png) | Works as expected |
| Desktop | ![screenshot](https://github.com/Jordan-Boulton1/whats-for-dinner/blob/main/documentation/testing/responsiveness/desktop-chrome-responsiveness.png) | ![screenshot](https://github.com/Jordan-Boulton1/whats-for-dinner/blob/main/documentation/testing/responsiveness/desktop-chrome-card-responsiveness.png) | Works as expected |
| iPhone 11 | ![screenshot](https://github.com/Jordan-Boulton1/whats-for-dinner/blob/main/documentation/testing/responsiveness/iphone11-responsiveness.png) | ![screenshot](https://github.com/Jordan-Boulton1/whats-for-dinner/blob/main/documentation/testing/responsiveness/iphone11-card-responsiveness.png) | Works as expected |

## Lighthouse Audit

I've tested my deployed project using the Lighthouse Audit tool to check for any major issues.

| Page | Mobile | Desktop | Notes |
| --- | --- | --- | --- |
| Home | ![screenshot](https://github.com/Jordan-Boulton1/whats-for-dinner/blob/main/documentation/testing/lighthouse/mobile-lighthouse.png) | ![screenshot](https://github.com/Jordan-Boulton1/whats-for-dinner/blob/main/documentation/testing/lighthouse/desktop-lighthouse.png) | Some minor warnings |

## Defensive Programming

Defensive programming was manually tested with the below user acceptance testing:

| Page | Expectation | Test | Result | Fix | Screenshot |
| --- | --- | --- | --- | --- | --- |
| Home | | | | | |
| | Search input is expected to accept one or more ingredients which needs to be seperated by a space when the user enters a value | Tested the search input by entering different combinations of values concatinated with `,`, `.`, `nospace`, `-` and `_`. | The search input behaved as expected, and it prevented the user from getting recipe results when an invalid input was entered. | Test concluded and passed | ![screenshot](https://github.com/Jordan-Boulton1/whats-for-dinner/blob/main/documentation/features/validation-error-handler.png) |
| | Hint messages is expected to be shown on the page when the user has entered a invalid value or when the input from the user yielded no results | Tested the hint message by entering invalid input into the search box and a value that the API returned no results with | The hint message behaved as expected and it was shown when the invalid actions by the user were taken and also hidden when no errors were detected | Test concluded and passed | ![screenshot](https://github.com/Jordan-Boulton1/whats-for-dinner/blob/main/documentation/features/error-handler-feat.png) |
| | Search button is expected to show found recipes from the input of the user | Tested the search button by entering a valid ingredient | The search button behaved as expected, and returned recipes related to the user input | Test concluded and passed | ![screenshot](https://github.com/Jordan-Boulton1/whats-for-dinner/blob/main/documentation/features/search-btn-result.png) |
| | Random button is expected to show any recipes and clear the previously entered user input if there is any | Tested the random button by clicking it with and without user input | The random button returned any recipes when not using a value in the search input and cleared the previously entered input and returned recipes | Test concluded and passed | ![screenshot](https://github.com/Jordan-Boulton1/whats-for-dinner/blob/main/documentation/features/random-btn-result.png) |
| | The recipe container is expected to be shown when recipe content is available and hidden when not | Tested the recipe container by using the search input or the random button to find recipes | The recipe container behaved as expected an it showed when recipes were found and it was hidden when no results were returned from the entered value | Test concluded and passed | ![screenshot](https://github.com/Jordan-Boulton1/whats-for-dinner/blob/main/documentation/features/cards-feat.png) |
| | The recipe cards are expected to be shown in the recipe container with recipe specific information when recipe content is available | Tested the recipe cards by using the search input or the random button to find recipes | The recipe cards behaved as expected and loaded relevant recipe information correctly | Test concluded and passed | ![screenshot](https://github.com/Jordan-Boulton1/whats-for-dinner/blob/main/documentation/features/recipe-card-result.png) |
| | When recipe cards are loaded each one of them is expected to have a "Show" button that will expand the card and render the relevant recipe ingredients as well as change the text from "Show" to "Hide"| Tested the recipe card "Show" button by clicking it | The "Show" button behaved as expected and rendered the relevant recipe ingredients | Test concluded and passed | ![screenshot](https://github.com/Jordan-Boulton1/whats-for-dinner/blob/main/documentation/features/card-show-hide.png) |
| | When the "Show" button is clicked and the relevant recipe ingredients are rendered a "View Recipe" button is also shown that when clicked will redirect the user to the related recipe page | Tested the feature by clicking the "View Recipe" button | The "View Recipe" button successfully redirected me to the relevant recipe page however, there was one recipe that I could find that had a broken link | In terms of project functionality the test concluded and passed as it successfully redirected the user, however, due to the API returning a broken link, that specific recipe was filtered out | ![screenshot](https://github.com/Jordan-Boulton1/whats-for-dinner/blob/main/documentation/features/view-recipe-btn.png) |
| | When the user refreshes or closes the page, the last recipes results the user has gotten are expected to be shown again when the user comes back to the page. If the user has used a search term to find the recipe results that will also be preserved when the user refreshes or returns to the page after closing it | Tested the feature by closing or reloading the page | The feature successfully preserved the last interaction on the page | Test concluded and passed | ![screenshot](https://github.com/Jordan-Boulton1/whats-for-dinner/blob/main/documentation/features/cache-result.png) |
| | When the "Clear" button is clicked any previous user input or recipe results will be removed from the search input, recipe container and cache | Tested the feature by clicking the "Clear" button and checking the cache storage of the page | The feature successfully removed any previously preserved recipe on the page | Test concluded and passed | ![screenshot](https://github.com/Jordan-Boulton1/whats-for-dinner/blob/main/documentation/features/clear-btn-result.png) |

## Bugs

- Duplicate recipe from API with different IDs

    ![screenshot](https://github.com/Jordan-Boulton1/whats-for-dinner/blob/main/documentation/testing/bugs/api-duplicate.png)
    ![screenshot](https://github.com/Jordan-Boulton1/whats-for-dinner/blob/main/documentation/testing/bugs/duplicate-from-api-1.png)
    ![screenshot](https://github.com/Jordan-Boulton1/whats-for-dinner/blob/main/documentation/testing/bugs/duplicate-from-api-2.png)

    - To fix this, I identified the IDs of the duplicate recipes, and removed a duplicate item from the array.

- Recipe card title

    ![screenshot](https://github.com/Jordan-Boulton1/whats-for-dinner/blob/main/documentation/testing/bugs/recipe-title-bug.png)

    - To fix this, I added the css property ```overflow: hidden;``` and ```height: 80px;``` to the recipe title, which caused the title to no longer appear out of its container.

- Faulty recipes

    ![screenshot](https://github.com/Jordan-Boulton1/whats-for-dinner/blob/main/documentation/testing/bugs/api-small-image-bug.png)

    - To fix this, I found the ID of the "Spanish Garlic Prawns" recipe and removed it from the array.
    
- Hero image not loading on iPhone devices
    
    ![screenshot](https://github.com/Jordan-Boulton1/whats-for-dinner/blob/main/documentation/testing/bugs/iphone11-hero-img-bug.png)
    
    - To fix this, I removed the ```background-attachment: fixed;``` property from the background due to the fact that iPhones do not understand this CSS property.

- Error 403 Forbidden

    ![screenshot](https://github.com/Jordan-Boulton1/whats-for-dinner/blob/main/documentation/testing/bugs/403-forbidden.png)

    - To fix this, I changed the caching implementation to store the unique IDs of the recipes and call the API to get the recipe by their ID rather than the entire objects. The reason why this bug was happening was because the recipe objects from the API came with attached links that came with a expiration token which overtime would cause a 403 forbidden due to the fact that the token had expired.

- Error 429 Too many Requests

    ![screenshot](https://github.com/Jordan-Boulton1/whats-for-dinner/blob/main/documentation/testing/bugs/429-error-code.PNG)

    - To fix this, I added an additional check for the response from the API for status 429 and forced the code to wait 8 seconds before calling the API again to successfully retrieve the recipes.

    ![screenshot](https://github.com/Jordan-Boulton1/whats-for-dinner/blob/main/documentation/testing/bugs/429-error-code-fix.PNG)

- Chrome auto fill adding white background to search input

    ![screenshot](https://github.com/Jordan-Boulton1/whats-for-dinner/blob/main/documentation/testing/bugs/chrome-auto-comp-bg-bug.png)
    
    - To fix this, I applied the following styling to the search input:

    ![screenshot](https://github.com/Jordan-Boulton1/whats-for-dinner/blob/main/documentation/testing/bugs/chrome-auto-comp-bg-bug-fix.png)
    
## Unfixed Bugs

- When validating HTML with a semantic `section` element, the validator warns about lacking a header `h2-h6`. This is acceptable.

    ![screenshot](https://github.com/Jordan-Boulton1/whats-for-dinner/blob/main/documentation/testing/bugs/dynamically-loaded-h2.png)

    - Attempted fix: this is a known warning and acceptable, and my section doesn't require a header since it's dynamically added via JS.
    
- Possible bugs
    
    - Possible bugs may still be present in the cards due to the fact that the API may return faulty data that I haven't been able to catch during the testing of the API.
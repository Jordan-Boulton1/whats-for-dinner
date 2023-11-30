# [WHATS FOR DINNER](https://jordan-boulton1.github.io/whats-for-dinner)

What's for Dinner is a website that is designed to take the hassel out of wondering what you are going to have for dinner, and make planning that much easier. Users of the website will be able to use the search input to search ingredients or recipes which they wish to make. Through an API, 8 different recipe cards will be generatewd that will provide the user with the required ingredients and instructions on how to make that specific recipe.

![Responsive Mockup](https://github.com/Jordan-Boulton1/whats-for-dinner/blob/main/documentation/responsive-mockup.PNG)

## UX

When creating the website I wanted a very simple yet clean design, where the page didn't feel too cluttered.

### Colour Scheme

The colours chosen on my website were taken as inspiration from various different food websites which feature a nice almond colour with a dark red to compliment.

- `#ffffff` used for primary text.
- `#000000` used for secondary text.
- `#EAE0D5` used for the background of the dynamically loaded cards.
- `#9D0208` used for secondary highlights such as the border of the recipe cards and their buttons.

I used [coolors.co](https://coolors.co/ffffff-eae0d5-9d0208-000000) to generate my colour palette.

![screenshot](https://github.com/Jordan-Boulton1/whats-for-dinner/blob/main/documentation/coolors.png)

### Typography

- [Mada](https://fonts.google.com/specimen/Mada?query=mada) was used for the primary title.

- [Mukta Vaani](https://fonts.google.com/specimen/Mukta+Vaani?query=Mukta) was used for the recipe card title and cuisine type.

- [Overpass](https://fonts.google.com/specimen/Overpass?query=Overpass) was used for all paragraphs and list ingredients on the page.

- [Font Awesome](https://fontawesome.com) icons were used on the dynamically loaded recipe cards to display how many people the recipes will feed, the time to make the recipe and how many calories are in the recipe.

## Wireframes

To follow best practice, wireframes were developed for mobile, tablet, and desktop sizes.
I've used [Balsamiq](https://balsamiq.com/wireframes) to design my site wireframes.

### Mobile Wireframe

<details>
<summary> Click here to see the Mobile Wireframes </summary>

Home
  - ![screenshot](https://github.com/Jordan-Boulton1/whats-for-dinner/blob/main/documentation/wireframes/mobile-wireframe.png)
</details>

### Tablet Wireframe

<details>
<summary> Click here to see the Tablet Wireframes </summary>

Home
  - ![screenshot](https://github.com/Jordan-Boulton1/whats-for-dinner/blob/main/documentation/wireframes/tablet-wireframe.png)

</details>

### Desktop Wireframe

<details>
<summary> Click here to see the Desktop Wireframes </summary>

Home
  - ![screenshot](https://github.com/Jordan-Boulton1/whats-for-dinner/blob/main/documentation/wireframes/desktop-wireframe.png)

</details>

## Features

There are several features on the page which are easy to follow and navigate, creating a nice user experience.

### Existing Features

- **Landing Page Image**

    - The landing page image is the set in stone for the website. Upon entering the website the user can immediately get a feel for what the page is about without having to read anything.

![Landing Page](https://github.com/Jordan-Boulton1/whats-for-dinner/blob/main/documentation/landing-image.png)

- **Search Box**

    - The search box contains clear instructions for the user to follow when adding ingredients. It also contains an input for the user to add their ingredients along with a search button which will return recipes specific to the user input and a random button which will return completely random recipes.
    - The search box is fully responsive and takes the input of ingredient which the user adds.

![Search Box](https://github.com/Jordan-Boulton1/whats-for-dinner/blob/main/documentation/search-box.png)

- **Dynamically Loaded Recipe Cards**

    - The dynamically loaded recipe cards are generated through an API when the user clicks the search button or the random button.
    - The recipe cards contain;

![screenshot](https://github.com/Jordan-Boulton1/whats-for-dinner/blob/main/documentation/recipe-card-img.png)
> An image related to the recipe

![screenshot](https://github.com/Jordan-Boulton1/whats-for-dinner/blob/main/documentation/recipe-card-title.png)
> The name of the recipe

![screenshot](https://github.com/Jordan-Boulton1/whats-for-dinner/blob/main/documentation/how-many-ppl.png)
> How many people the recipe can feed

![screenshot](https://github.com/Jordan-Boulton1/whats-for-dinner/blob/main/documentation/time-to-make.png)
> How long the recipe will take to make

![screenshot](https://github.com/Jordan-Boulton1/whats-for-dinner/blob/main/documentation/calories.png)
> The calories within the recipe

![screenshot](https://github.com/Jordan-Boulton1/whats-for-dinner/blob/main/documentation/cuisine-type.png)
> The cuisine type

![screenshot](https://github.com/Jordan-Boulton1/whats-for-dinner/blob/main/documentation/cards-feat.png)
  
- **Recipe Card - Expanded Content**

    - Also featured on the card is a "**Expand Button.**" When the user clicks on the expand button, the recipe ingredients drop down, allowing the user to easily see the required ingredients in order to make the specific recipe.
    - Also contained within the **Expand** dropdown is a **View Recipe** button. This gives the user easy access to the related recipe website in order to see the method on how to make the recipe.
![screenshot](https://github.com/Jordan-Boulton1/whats-for-dinner/blob/main/documentation/expand-content.png)

### Future Features

- Favourite Recipe
    - I would have loved to add the ability to save a recipe as a favourite where the user could return to their favourite recipes at a later date.

## Tools & Technologies Used

- [HTML](https://en.wikipedia.org/wiki/HTML) used for the main site content.
- [CSS](https://en.wikipedia.org/wiki/CSS) used for the main site design and layout.
- [CSS Flexbox](https://www.w3schools.com/css/css3_flexbox.asp) used for an enhanced responsive layout.
- [JavaScript](https://www.javascript.com) used for user interaction on the site.
- [Git](https://git-scm.com) used for version control. (`git add`, `git commit`, `git push`)
- [GitHub](https://github.com) used for secure online code storage.
- [GitHub Pages](https://pages.github.com) used for hosting the deployed front-end site.
- [Visual Studio Code](https://code.visualstudio.com/) used as a cloud-based IDE for development.
- [Balsamiq](https://balsamiq.com/) used to create wireframes in early development.
- [Edamam](https://developer.edamam.com/edamam-recipe-api) recipe search API used to integrate a recipe database.
- [Obfuscator](https://obfuscator.io/) used to hide the API key and API ID.
- [Ionos](https://www.ionos.co.uk/tools/favicon-generator#tool) used to generate the favicon files.

## Testing

For all testing, please refer to the [TESTING.md](TESTING.md) file.

## Deployment

The site was deployed to GitHub Pages. The steps to deploy are as follows:

- In the [GitHub repository](https://github.com/Jordan-Boulton1/whats-for-dinner), navigate to the Settings tab 
- From the source section drop-down menu, select the **Main** Branch, then click "Save".
- The page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found [here](https://jordan-boulton1.github.io/whats-for-dinner)

### Local Deployment

This project can be cloned or forked in order to make a local copy on your own system.

#### Cloning

You can clone the repository by following these steps:

1. Go to the [GitHub repository](https://github.com/Jordan-Boulton1/whats-for-dinner) 
2. Locate the Code button above the list of files and click it 
3. Select if you prefer to clone using HTTPS, SSH, or GitHub CLI and click the copy button to copy the URL to your clipboard
4. Open Git Bash or Terminal
5. Change the current working directory to the one where you want the cloned directory
6. In your IDE Terminal, type the following command to clone my repository:
	- `git clone https://github.com/Jordan-Boulton1/whats-for-dinner.git`
7. Press Enter to create your local clone.

Alternatively, if using Gitpod, you can click below to create your own workspace using this repository.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/Jordan-Boulton1/whats-for-dinner)

Please note that in order to directly open the project in Gitpod, you need to have the browser extension installed.
A tutorial on how to do that can be found [here](https://www.gitpod.io/docs/configure/user-settings/browser-extension).

#### Forking

By forking the GitHub Repository, we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original owner's repository.
You can fork this repository by using the following steps:

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/Jordan-Boulton1/whats-for-dinner)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. Once clicked, you should now have a copy of the original repository in your own GitHub account!

#### API Integration

In order to consume the API that was used in the project, please follow these steps:

1. Go to the following address [edamam.com](https://www.edamam.com/).
2. In the navbar at the top right, click on the "Signup API" button. This will redirect you to a from that you are required to fill out all of the information provided. **IMPORTANT: make sure to choose the "developer" plan under the "Recipe Search API" category.**
3. Login with the information you just registered making sure the "Edamam APIs" tab is selected at the top of the sign in modal.
4. Once singed in, click on the "Accounts" button in the navbar in the top right and once the modal pops up, click on the "Go to Dashboard" button.
5. Locate the "Applications" tab and click the "Create a new application" button.
6. Once redirected, you will be given an option of 3 different services, make sure to select the "Recipe Search API" option.
7. When redirected, give your project a name i.e "Personal Recipe Project" and a description i.e "Recipe generator" and click "Create Application" at the bottom right of the form.
8. You should now have your own unique Application ID and Application Key.
9. Copy the Application Key and paste it into your javascript file. i.e ```const apiKey = *insert api key*;```.
10. Repeat step 9 for the Application ID.

#### Optional:

1. Locate the [Obfuscator Tool](https://obfuscator.io/).
2. Remove the text inside of the code block.
3. Create a function inside of the code block and paste your unique api key inside of the function you just created. It should look similar to the following:
```js
function exportApiKey() {
  return "paste api key within these double quotes";
}
```
4. After creating your function, click on the "Obfuscate" button.
5. Copy the code given by the Obfuscator and paste it into the your javascript file.
6. Inside of your javascript file, at any point now you will be able to call your function. i.e ```exportApiKey();```
7. Repeat steps 1-6 for the ```exportApiId();```.
8. You should now have a working API with two API secrets that are hard to copy, which makes it harder to steal your API secrets.

## Credits

### Content

| Source | Location | Notes |
| --- | --- | --- |
| [Markdown Builder](https://tim.2bn.dev/markdown-builder) | README and TESTING | tool to help generate the Markdown files |
| [Flexbox Froggy](https://flexboxfroggy.com/) | entire site | modern responsive layouts |
| [Font Joy](https://fontjoy.com/) | entire site | tool to generate font pairings |
| [Google Fonts](https://fonts.google.com/) | entire site | tool to import fonts |
| [Slider Revolution](https://www.sliderrevolution.com/resources/css-search-box/) | entire site | transparent search box |
| [O'Reilly](https://www.oreilly.com/videos/50-projects-in/9781801079976/) | entire site | how to work with apis (netflix project) |
| [freeCodeCamp](https://www.freecodecamp.org/news/javascript-get-request-tutorial/) | script.js | how to make a http request |
| [Obfuscator](https://obfuscator.io/#code) | entire site | used to hide the api key | 
| [Stackoverflow](https://stackoverflow.com/questions/4092325/how-to-remove-part-of-a-string-before-a-in-javascript) | script.js | used to get the API ID |
| [FreeFrontend](https://freefrontend.com/css-recipe-cards/) | entire site | used card #3 as inspiration |
| [Grrr Tech](https://grrr.tech/posts/create-dom-node-from-html-string/) | entire site | create a DOM node from an HTML string |
| [Stackoverflow](https://stackoverflow.com/questions/61083813/how-to-avoid-internal-autofill-selected-style-to-be-applied) | search bar | used to fix a bug on chrome browser which caused <br> a white box to appear while clicked inside the search input |
| [w3schools](https://www.w3schools.com/howto/howto_js_accordion.asp) | recipe card | used to help create the drop down button |
| [Modzilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/kbd) | entire site | how to work with ```<kbd>``` input element |

### Media

| Source | Location | Type | Notes |
| --- | --- | --- | --- |
| [Unsplash](https://unsplash.com/photos/avocado-tomatoes-eggs-mushrooms-spring-onions-and-leaves-uQs1802D0CQ) | home page | image | hero image background |

### Acknowledgements

- I would like to thank my Code Institute mentor, [Tim Nelson](https://github.com/TravelTimN) for their support throughout the development of this project.
- I would like to thank the [Code Institute](https://codeinstitute.net) tutor team for their assistance with troubleshooting and debugging some project issues.
- I would like to thank the [Code Institute Slack community](https://code-institute-room.slack.com) for the moral support; it kept me going during periods of self doubt and imposter syndrome.
- I would like to thank my partner (Stefani), for believing in me, and allowing me to make this transition into software development.
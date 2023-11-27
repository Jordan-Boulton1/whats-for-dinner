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
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
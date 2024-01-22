# Multilang Slugify

[![npm version](https://img.shields.io/npm/v/@danielhaim/slugify)](https://www.npmjs.com/package/@danielhaim/slugify)
[![Downloads](https://img.shields.io/npm/dt/@danielhaim/slugify.svg)](https://www.npmjs.com/package/@danielhaim/slugify)
![GitHub](https://img.shields.io/github/license/danielhaim1/slugify)

Slugify is an all-purpose slug generator that converts text into clean, SEO-friendly slugs. It's ideal for automating anchor IDs in headings and is designed to handle a wide range of languages and special characters.

## Demo


<a target="_blank" href="https://codepen.io/danielhaim/pen/NWJgNVN">
    <img src="https://raw.githubusercontent.com/danielhaim1/slugify/6f6b35928ab0b6cd69e3b0cb1e2d3062c6b3e05d/demo/demo.png" width="100%" height="auto" alt="Multilang Slugify Demo">
</a>

------------

## Supported Languages

Slugify supports a diverse set of languages:

German, Danish, Dutch, Finnish, French, Hungarian, Italian, Norwegian, Portuguese, Romanian, Russian, Spanish, Swedish, Turkish, Greek, Bulgarian, Serbian, Croatian, Czech, Polish, Slovak, Slovenian, Latvian, Lithuanian, Estonian, Persian, Arabic, Hebrew, Hindi, Thai, Chinese, Japanese, Korean, Vietnamese, and Ukrainian, as well as Emoji


## Installation

You can install this module via npm:

```bash
$ npm i @danielhaim/slugify
```

## NPM

```js
import slugify from './path/to/slugify/index.js';

const slugify = new slugify();
console.log(slugify.generate("Hello World!")) // returns hello-world
```

------------

## Examples

### Headings with IDs

Input:

```html
<h1><span>How will mobile commerce impact 2022?</span></h1>
<h2><span>Sophia, Ärztin aus Hamburg</span></h2>
<h2><span>Süße Sophia, schön und klug</span></h2>
```

```js
// Function to generate slugs
function generateSlug(titleElement) {
  const titleContent = titleElement.textContent || '';
  const slugifier = new Slugify();
  const slugged = slugifier.generate(titleContent);
  return slugged;
}

// Select all heading elements (h1, h2, h3, etc.)
const headingElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

headingElements.forEach((headingElement) => {
  const slugged = generateSlug(headingElement);

  // Only set the ID and create <a> if a valid slug is generated
  if (slugged) {
    const anchorElement = document.createElement('a');
    anchorElement.href = `#${slugged}`;
    anchorElement.textContent = headingElement.textContent;
    headingElement.innerHTML = ''; // Clear existing content
    headingElement.appendChild(anchorElement);
  }
});
```

Output:

```html
<h1><a href="#how-will-mobile-commerce-impact-2022"><span>How will mobile commerce impact 2022?</span></a></h1>
<h2><a href="#sophia-aerztin-aus-hamburg"><span>Sophia, Ärztin aus Hamburg</span></a></h2>
<h2><a href="#suesse-sophia-schoen-und-klug"><span>Süße Sophia, schön und klug</span></a></h2>
```

### German special characters

```js
const slugifier = new Slugify();

slugifier.generate('Ist dein Name Sophia?'); // Output: "ist-dein-name-sophia"
slugifier.generate('Sophia, Ärztin aus Hamburg'); // Output: "sophia-aerztin-aus-hamburg"
slugifier.generate('Wie geht es dir, Sophia?'); // Output: "wie-geht-es-dir-sophia"
slugifier.generate('Süße Sophia, schön und klug'); // Output: "suesse-sophia-schoen-und-klug"
slugifier.generate("Sophia's Geburtstag"); // Output: "sophias-geburtstag"
```

### Additional examples with special characters and delimiters

```js
const slugifier = new Slugify();

slugifier.generate('Hello, world!'); // Output: "hello-world"
slugifier.generate('Hello, world!'); // Output: "hello_world"
slugifier.generate('Hello, world!'); // Output: "hello-world"

slugifier.generate('#1 Best in Class'); // Output: "number-1-best-in-class"
slugifier.generate('hello@example.com'); // Output: "hello-at-example-com"
```

## Build Process

```bash
$ npm run build
```

## Test

```bash
$ npm run test
```

## Report Bugs

If you encounter any bugs or issues while using the library, please report them by opening a new issue in the repository's issue tracker. 

When reporting a bug, please provide as much detail as possible, including the steps to reproduce the issue and any error messages that you see. I appreciate any contribution to improving this library.
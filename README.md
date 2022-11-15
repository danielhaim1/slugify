# Slugify
This script takes a string in different languages and returns a slugified version of it.

It is used to generate slugs for the blog posts, and is also used to generate the slugs for ids from the headings in the blog posts.

------------

### Language Support:

German, Danish, Dutch, Finnish, French, Hungarian, Italian, Norwegian, Portuguese, Romanian, Russian, Spanish, Swedish, Turkish, Greek, Bulgarian, Serbian, Croatian, Czech, Polish, Slovak, Slovenian, Latvian, Lithuanian, Estonian, Persian, Arabic, Hebrew, Hindi, Thai, Chinese, Japanese, Korean, Vietnamese, and Ukrainian, as well as Emoji

------------

### Examples
#### Slugify as Heading Attribute

Input:
```html
<h1><span>How will mobile commerce impact 2022?</span></h1>
```
```js
const node = document.querySelector("h1");
const nodeSlug = slugify(node.textContent);
node.setAttribute('id', nodeSlug);
```
Output:
```html
<h1 id="how-will-mobile-commerce-impact-2022"><span>How will mobile commerce impact 2022?</span></h1>
```

#### Slugify w/ String Attribute

```js
slugify("Wie heißt du"); // Returns "wie-heist-du"
slugify("Wie heißt du", "_"); // Returns "wie_heist_du"
```

```js
slugify("№ 1 Best in Class") // returns number-1-best-in-class
slugify("#1 Best in Class") // returns number-1-best-in-class
```

```js
slugify("hello@example.com") // returns hello-at-example-com
```

```js
slugify('Hello, world!', '-') // returns hello-world
slugify('Hello, world!', '_') // returns hello_world
slugify('Hello, world!', ' ') // returns hello world
slugify('Hello, world!', '') // returns hello-world
```

# Slugify
This script takes a string in different languages and returns a slugified version of it.

It is used to generate slugs for the blog posts, and is also used to generate the slugs for ids from the headings in the blog posts.

## Language Support:

German, Danish, Dutch, Finnish, French, Hungarian, Italian, Norwegian, Portuguese, Romanian, Russian, Spanish, Swedish, Turkish, Greek, Bulgarian, Serbian, Croatian, Czech, Polish, Slovak, Slovenian, Latvian, Lithuanian, Estonian, Persian, Arabic, Hebrew, Hindi, Thai, Chinese, Japanese, Korean, Vietnamese, and Ukrainian, as well as Emoji

### Output

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


### Functions

```js
/**
 * Escape characters with special meaning either inside or outside the character sets
 * @param str, the string to escape
 * @returns string, the escaped string
 * @url https://mathiasbynens.be/notes/javascript-escapes
 * @url https://stackoverflow.com/a/6969486/112731
 * @url https://stackoverflow.com/a/1144788/112731
 */

function escapeRegExp(str) {
  if (typeof str !== "string") {
    throw new TypeError("Expected a string");
  }
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
```

```js
/**
 * Return a slugify version of the string with the specified separator.
 *
 * @param {string} str - the string to slugify.
 * @param {string} [separator='-'] - the separator to use.
 * @return {string} - the slugify string.
 *
 * @url https://gist.github.com/mathewbyrne/1280286
 * @url https://stackoverflow.com/a/2955878/112731
 */

function slugify(text, separator) {
  let output = text.toString().trim();
  const sep = separator || "-";
  replacements.forEach(([from, to]) => {
    output = output.replace(new RegExp(escapeRegExp(from), "g"), to);
  });
  output = output
    .toString()
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/#+([a-zA-Z0-9_]+)/gi, "hashtag $&")
    .replace(/#([0-9]\d*)/g, "number $&")
    .replace("hashtag number", "number")
    .replace(/--+/g, " ")
    .replace(/[^a-zA-Z0-9_\u3400-\u9FBF\s-]/g, " ")
    .replace(/\s+/g, sep)
    .replace(new RegExp(`^${sep}+`), "")
    .replace(new RegExp(`${sep}+$`), "");
  return output;
}
```

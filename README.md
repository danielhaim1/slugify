## slugify
Return a slugified version of the string with the specified separator.

### Methods

- Loops through the list of replacements, replacing the characters in the string.
- Remove all non-word characters that are not the separator (everything except numbers and letters).
- Replace all separator characters and whitespace with a single separator.
- Replace `&` with `and`, `@` with `at`, `#` with `hash`, `№` with `number`, and `°` with `degrees`, etc.
- Escape characters with special meaning, either inside or outside character sets.
- Use a simple backslash escape when it's always valid and a `\xnn` escape when the more straightforward form would be disallowed by Unicode patterns' stricter grammar.
- Remove leading and trailing separators.
- Convert to lowercase.
- Return the result.

### Examples

```js
slugify('Hello, world!', '-') // returns hello-world
slugify('Hello, world!', '_') // returns hello_world
slugify('Hello, world!', ' ') // returns hello world
slugify('Hello, world!', '') // returns hello-world
```

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

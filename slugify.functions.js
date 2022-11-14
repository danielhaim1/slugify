
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

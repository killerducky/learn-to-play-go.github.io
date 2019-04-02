# Learn to Play Go
## A website designed and written in Hugo

#### Moving static HTML pages from test area into Hugo

1. Place the corresponding HTML file in `themes/ltpg/layouts/puzzles/
2. Remove all HTML `<head>` entries and instead replace it with the corresponding `{{ define "body" }}` tag (or extraJS for JS, etc.)
3. Make a note of the 3 values passed into the `setCookie` function on the `good` button.
4. Under `/content/puzzles` add a file with the same number as the HTML file (for example: `1.md` instead of `1.html`). This should be done with hugo (`hugo new puzzles/3.md`). Then adjust the frontmatter in the file by adding the values in cookieSettings that are used in the function `setCookie`.
5. Reduce the HTML file to only the content and the extra JS/CSS imports. There should be no `<body>`, `<html>`, or buttons like the gray "back" button or the green/red buttons at the bottom of the page.
6. For any links or references to files present in the HTML file, you must make certain they are based off the root of the page (begin with a `/`). For example `images/pattern.png` would then be `/images/pattern.png`.
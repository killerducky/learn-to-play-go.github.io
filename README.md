# Learn to Play Go

## A website designed and written in Hugo

### Moving static HTML pages from test area into Hugo

1. Place the corresponding HTML file in `themes/ltpg/layouts/puzzles/
2. Remove all HTML `<head>` entries and instead replace it with the corresponding `{{ define "body" }}` tag (or extraJS for JS, etc.)
3. Make a note of the 3 values passed into the `setCookie` function on the `good` button.
4. Under `/content/puzzles` add a file with the same number as the HTML file (for example: `1.md` instead of `1.html`). This should be done with hugo (`hugo new puzzles/3.md`). Then adjust the frontmatter in the file by adding the values in cookieSettings that are used in the function `setCookie`.
5. Move all the content from the HTML file into Markdown (removing all HTML tags), and use frontmatter and Hugo shortcodes to create the corresponding elements.
6. For any links or references to files present in the HTML file, you must make certain they are based off the root of the page (begin with a `/`). For example `images/pattern.png` would then be `/images/pattern.png`.

### Shortcodes

- alert - this creates the red gradient alert boxes.
- rule - this creates the red gradient rule boxes (with a left-hand border)
- black - this makes a word bold and uppercase
- tsumego - this shortcode either uses the frontmatter settings (puzzles) or can take a string in the sgf parameter See puzzles 2 and 3.
- jgoboard - this is used only on puzzle 1 and creates a free play board.

Shortcodes are used as follows: `{{< alert >}}Blah blah blah{{< /alert >}}`, `{{< tsumego sgf="(;FF[4]GM[1]VW[aa:jj]SZ[9]ST[2][...])" >}}`, or `{{< black "word(s) to make bold" >}}`
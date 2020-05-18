# Learn to Play Go
*A website designed and written in [Hugo](https://gohugo.io/)*

The content is licensed under Attribution-NonCommercial 4.0 International (CC BY-NC 4.0) 

Which means you are free to:
    Share — copy and redistribute the material in any medium or format
    Adapt — remix, transform, and build upon the material
    The licensor cannot revoke these freedoms as long as you follow the license terms.

Under the following terms:
    Attribution — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
    NonCommercial — You may not use the material for commercial purposes.
    No additional restrictions — You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits. 

## Editing page content
All the main content is located in content/puzzles. They are markdown files and you can just edit them directly. 

The header contains frontmatter for some of the finest settings and mostly should need no changes. The rest of the page is simple markdown you surely know with only a handfull of extra codes for some of the extra features. They are easy to use and described bellow

### Shortcodes

- alert - this creates the red gradient alert boxes.
- rule - this creates the red gradient rule boxes (with a left-hand border)
- black - this makes a word bold and larger font
- extra - adds a collapsable box for extra information (needs a unique number for first variable)
- tsumego - this shortcode either uses the frontmatter settings (puzzles) or can take a string in the sgf parameter See puzzles 2 and 3.
- sgf - creates an sgf viewer (same frontmatter as tsumego)
- jgoboard - this is used only on puzzle 1 and creates a free play board.

Shortcodes are used as follows: `{{< alert >}}Blah blah blah{{< /alert >}}`, `{{< tsumego sgf="(;FF[4]GM[1]VW[aa:jj]SZ[9]ST[2][...])" >}}`, or `{{< black "word(s) to make bold" >}}`

## Editing the interactive puzzles
The puzzles are located in  themes/ltpg/static/puzzleSGFs and are .sgf files named according to the puzzle page they belong to. To edit the text you can just edit them in any sgf editor (I am using Drago it has all I need) simple text edits are even possible online 

to mark a variation as correct add the [TE] (tesuji) flag to it. Any variation that ends without this flag is marked as incorrect.

## Deploying locally
To deploy this webpage locally you need git and hugo installed.

Once done ```git clone https://gitlab.com/Adam314159/hugo-ltpg``` to download the project

navigate to the project folder in your cmd (rather with administrator privilidges) and ```hugo serve``` to start a local server

You can preview on displayed localhost URL, any change to the files will immediately be previewed there.
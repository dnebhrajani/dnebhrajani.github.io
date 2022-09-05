---
title: "Durga Nebhrajani"
subtitle: "all art is but dirtying paper delicately"
author: ""
date: ""
---

# About

I'm a self-trained artist with a passion for sketching and portraiture in
charcoal and graphite. From finger-drawings on a freshly-painted
wall, to lettering quotes in a skating rink and painting my shoes, art has been
consistent with me for as long as I can remember. While I've tried several
different styles and mediums, including quilling paper strips, origami, acrylic,
watercolour, ink, and a few others, there's something about being able to generate art
with nothing more than a pencil that has an irresistable hold on me.

My work in charcoal and graphite is centered on impressionalism and realism, with
the occasional semi-abstract acrylic or watercolour.


# Art Gallery

_2022-08-21_

![Glory days](IMG_4300.jpg)

[See more ->](art_website/rest-art)

The source code is extremely tweakable.[^tweakable] A small set of CSS variables
control a large number of font and color settings: you don't have to hunt down
all the places that need to be changed to tweak the design. As a proof of
concept, see [this page](paper/), which tweaks the default theme slightly. These
same CSS variables power the light- and dark-mode versions of the theme. Of
course, the code is open source and you're welcome to copy the theme files and
completely overhaul them if desired.

[^tweakable]:
  {-} When changing things like the font family or font size, the thing that
  matters is to pay special attention to alignment. Different fonts have
  different x-heights and widths. Most layouting can be agnostic of these
  things, but there are explicit variables for places where it matters.


And finally, there's basically only HTML and CSS. The theme doesn't use custom
fonts by default, and only uses JavaScript for two things:

- Rendering math (via [\(\KaTeX\)][KaTeX]), only if used.
- Slightly tweaking the appearance of checklist items. (Pandoc emits them as
  disabled, but they look better when enabled in my opinion.) This is entirely
  presentational.

Placement of side notes, the table of contents, and code block line highlights
are all controlled with CSS. See the [credits](#credits) below for more
background on the techniques used.

# Usage

This project merely provides a CSS files and a standalone HTML template to give
to Pandoc.  The imporant files that you might want to copy out to start your own
project:

- [`public/css/theme.css`], the core CSS implementing theme
- [`template.html5`], the Pandoc template that renders Markdown to HTML
- [`Makefile`], showcasing the Pandoc flags required to get things to build
- [`src/index.md`], the source code for this page

[`public/css/theme.css`]: https://github.com/jez/pandoc-markdown-css-theme/blob/master/public/css/theme.css
[`template.html5`]: https://github.com/jez/pandoc-markdown-css-theme/blob/master/template.html5
[`Makefile`]: https://github.com/jez/pandoc-markdown-css-theme/blob/master/Makefile
[`src/index.md`]: https://github.com/jez/pandoc-markdown-css-theme/blob/master/src/index.md

To see things in action, try rebuilding this site locally. First, you'll need a
few command line programs:

- [ ] [Pandoc]
- [ ] [`pandoc-sidenote`]
- [ ] `realpath` from [GNU coreutils]
- [ ] (optional) [`watchman`], for rebuilding when files change

Follow the installation instructions for your platform. If you're using macOS,
installation is as easy as:

```{.numberLines}
brew install pandoc coreutils
brew tap jez/formulae
brew install pandoc-sidenote
```

Then you can clone this project and run `make watch`:

```{.bash .numberLines .hl-7 .hl-10}
git clone https://github.com/jez/pandoc-markdown-css-theme
cd pandoc-markdown-css-theme

# Test everything by forcing a clean build
# (the generated comes with the clone)
make clean
make

# If you installed watchman
make watch
```

Running `make` will build everything in the site.

Running `make watch` will start a webserver at <http://127.0.0.1:8000/>, open
that URL in a web browser, and watch files for changes in the background.

## Usage with Jekyll

While the core theme is just a handful of static files that can be copied into
any project, using this theme with [Jekyll] is as easy as installing a theme:

→ [Pandoc Markdown Jekyll Theme][`pandoc-markdown-jekyll-theme`]

Check the project above for installation and usage instructions with Jekyll.

# Credits

First, thanks to [Pandoc], by John MacFarlane, for being an all-around awesome
tool, especially for Markdown.

The core technique for laying out side notes[^gwern] I learned from [Tufte CSS],
by Dave Liepmann. The technique is [described in detail
here][tufte-css-sidenotes]. Tufte CSS suggests writing the HTML for sidenotes by
hand, but I wanted to use Markdown. I wrote [`pandoc-sidenote`], a [Pandoc
filter] that traverses Pandoc's internal AST and converts footnote nodes into
m /[]the HTML side note markup for Tufte CSS-style side notes.

[^gwern]:
  {-} Gwern has a great survey post that discusses [Sidenotes In Web Design],
  covering the techniques in Tufte CSS as well as the limitations, and many
  alternatives.

[tufte-css-sidenotes]: https://edwardtufte.github.io/tufte-css/#sidenotes
[Sidenotes In Web Design]: https://www.gwern.net/Sidenotes

While the idea for side notes comes entirely from Tufte CSS, the implementation
at this point is almost completely different. Tufte CSS uses relative widths
everywhere, but I wanted a body with a constant width at all but the smallest
screen sizes. Tufte CSS renders the main body off center. Rendering centered
when possible and off center when not adds complexity in the implementation.

The inspiration for code block line highlights comes from a change I contributed
to [`pandoc-emphasize-code`], by Oskar Wickström (another Pandoc filter). I
decided against using it for this project because it forces a choice of either
line highlights or syntax highlighting per code block (unless you tack on a
JavaScript-based syntax highlighter, like Highlight.js). I thought of a [clever
technique](features/#line-highlight-limit) using CSS clases to avoid this.

[`pandoc-emphasize-code`]: https://github.com/owickstrom/pandoc-emphasize-code

Considerable design inspiration comes from [Dropbox Paper], a gorgeous and
powerful tool. (In fact, the theme is customizable enough to [recreate the
look of Paper](paper/). This is provided for educational purposes only, under
Fair Use.)

# See also

If you'd like to use Tufte CSS with Pandoc in your own project, feel free to use
my [Tufte Pandoc CSS] project.

[Tufte Pandoc CSS]: https://jez.io/tufte-pandoc-css/

If you'd like to use this theme in a Jekyll project, I have already packaged
these files as a Jekyll theme: [`pandoc-markdown-jekyll-theme`].

<p class="signoff">
  <a href="/">↑ Back to the top</a>
</p>

[Pandoc]: https://pandoc.org/
[Pandoc filter]: https://pandoc.org/filters.html
[`pandoc-sidenote`]: https://github.com/jez/pandoc-sidenote
[GNU coreutils]: https://www.gnu.org/software/coreutils/coreutils.html
[`watchman`]: https://facebook.github.io/watchman/
[KaTeX]: https://katex.org/
[Tufte CSS]: https://edwardtufte.github.io/tufte-css/
[Dropbox Paper]: https://www.dropbox.com/paper
[`pandoc-markdown-jekyll-theme`]: https://github.com/jez/pandoc-markdown-jekyll-theme
[Jekyll]: https://jekyllrb.com

#!/bin/sh
pandoc --katex --from markdown+tex_math_single_backslash --filter pandoc-sidenote --to html5+smart --template=template.html5 --css="theme.css" --css="skylighting-solarized-theme.css" --toc --wrap=none --output "$1.html" "$1.md"
  

#!/bin/sh
# Stamp every JS module and the stylesheet with a version, so browsers
# fetch fresh copies after an update instead of mixing cached old files
# with new ones (GitHub Pages lets browsers cache files for 10 minutes).
#
# Run after every content or code change, before committing:
#   sh tools/version.sh            # uses the current date and time
#   sh tools/version.sh 20261005a  # or a version of your choice
set -e
cd "$(dirname "$0")/.."
V="${1:-$(date +%Y%m%d%H%M)}"

find js -name '*.js' -exec sed -i -E \
  -e "s#(from '\.{1,2}/[^'?]+\.js)(\?v=[^']*)?'#\1?v=$V'#g" \
  -e "s#(import\(\`\./pages/\\$\{found\.page\}\.js)(\?v=[^\`]*)?\`#\1?v=$V\`#" {} +

sed -i -E \
  -e "s#(href=\"css/style\.css)(\?v=[^\"]*)?\"#\1?v=$V\"#" \
  -e "s#(src=\"js/app\.js)(\?v=[^\"]*)?\"#\1?v=$V\"#" index.html

echo "Version set to $V"

#!usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A 
git commit -m "New commit"
git push -f git@github.com:crackerslekap/vue-factbook.git master:gh-pages

cd -

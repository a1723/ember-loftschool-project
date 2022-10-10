#!/bin/bash

# Exit with nonzero exit code if anything fails.
set -e

git config user.name "akonovalov"
git config user.email "sashkakonowawka4@gmail.com"

echo "Start to deploy..."

git checkout --orphan develop

git --work-tree ./dist add --all
git --work-tree ./dist commit -m "Deploy to GitHub Pages"
git push -f origin HEAD:gh-pages
rm -r dist

# git checkout -f main
# git branch -D gh-pages

echo "Successfully deployed"

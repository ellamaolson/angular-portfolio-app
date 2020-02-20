# elanaolson.com

This is my personal website and serves as an example of deploying a personal website on Github Pages, [read more here](https://medium.com/@elanaolson/deploying-a-personal-website-to-github-pages-da2af6167f8b).

## Dev server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

_develop_ branch serves as my default branch where I track source code and _master_ branch is the rendered JavaScript to help deploy to Github Pages.

Each time I update _develop_ branch, I run this sequence to build to _master_.

`git checkout master`

`git pull origin develop`

`ng build --prod --base-href https://github.com/ellamaolson/ellamaolson.github.io`

`ng deploy —branch=master`

yarn build &&
git checkout gh-pages &&
rm -rf *.html *.js *.css *.png &&
mv dist/* ./ &&
rm -rf dist;
git add . &&
git commit -m 'build: 打包' &&
git push --set-upstream origin gh-pages &&
git checkout main
yarn build

rm -rf docs

sed -i.'' 's/\/static/static/g' build/asset-manifest.json
rm -rf build/asset-manifest.json.
# mv build/asset-manifest.json. build/asset-manifest.json

sed -i.'' 's/\/static/static/g' build/index.html
rm -rf build/index.html.
# mv build/index.html. build/index.html


mv build/ docs/
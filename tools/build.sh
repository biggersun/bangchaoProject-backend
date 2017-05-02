rm -rf dist*

NODE_ENV=production webpack --config config/webpack.config.pro.js

# dd=$(date +%Y%m%d%H%M)

# tar -zcvf dist/${dd}.mis.tar.gz --exclude=.DS_Store dist

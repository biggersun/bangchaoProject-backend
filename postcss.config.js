const path = require('path');
const smartImport = require('postcss-smart-import');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const vars = require('postcss-simple-vars');
const calc = require('postcss-calc');
const { themePath } = require('./config/files.config');

const theme = require(themePath); // eslint-disable-line import/no-dynamic-require

const variables = Object.keys(theme).reduce(
    (pre, cur) => {
        pre[cur.slice(1)] = theme[cur]; // eslint-disable-line no-param-reassign
        return pre;
    },
    Object.create(null)
);

module.exports = ({ webpack }) => {
    const isLess = /^\.less$/i.test(path.extname(webpack.resourcePath));

    const autoprefixerPlugin = autoprefixer({
        browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 10']
    });

    const config = {};

    if (isLess) {
        config.plugins = [autoprefixerPlugin];
    } else {
        config.plugins = [
            smartImport({
                path: webpack.options.resolve.modules,
                addDependencyTo: webpack
            }),
            vars({ variables }),
            calc(),
            precss(),
            autoprefixerPlugin
        ];
    }

    return config;
};

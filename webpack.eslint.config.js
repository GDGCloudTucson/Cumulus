/*
 *  You might be wondering, why on earth is there a webpack config here
 *  when Gatsby is handling webpack for us?
 *
 *  It's to make eslint stop yelling everywhere this is imported, because
 *  we've made imports extra fancy in other places...
 */

const path = require('path');

module.exports = {
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    }
};

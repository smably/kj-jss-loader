var omitRequest = require.resolve('./omit');
var loaderRequest = require.resolve('./loader');

module.exports = function jssLoader(post, pre) {
  if (Array.isArray(post)) {
    post = post.join('!');
  }

  if (Array.isArray(pre)) {
    pre = pre.join('!');
  }

  console.log([omitRequest, post, loaderRequest, pre || ''].join('!'));
  return [omitRequest, post, loaderRequest, pre || ''].join('!');
}

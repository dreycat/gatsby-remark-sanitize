const visit = require('unist-util-visit');
const sanitizeHtml = require('sanitize-html');

module.exports = ({ markdownAST }, options) => {
  visit(markdownAST, 'html', node => {
    if (options.cleanHTML) {
      node.value = '';
    } else {
      node.value = sanitizeHtml(node.value, options.sanitizeHTML);
    }
  });
};

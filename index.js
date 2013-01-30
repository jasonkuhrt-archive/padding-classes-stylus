

function plugin(stylus) {
  stylus.use(require('shorthand-edge-omissions-stylus'));
  stylus.import('shorthand-edge-omissions')
  stylus.include(__dirname);
}



module.exports = plugin;

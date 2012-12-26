


function plugin(stylus) {
  stylus.use(require('better-clockhand-stylus'));
  stylus.include(__dirname);
}



module.exports = plugin;

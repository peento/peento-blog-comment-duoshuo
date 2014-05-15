/**
 * peento-blog-comment-duoshuo
 *
 * @author Zongmin Lei <leizongmin@gmail.com>
 */

module.exports = function (ns, plugin, debug) {

  plugin.load(__dirname);

  var app = ns('app');
  app.once('start', function () {
    // init config
    function callback (err) {
      if (err) {
        console.error(err);
      }
    }
    app.call('config.set_if_not_exists', {
      name:  'comment_duoshuo_short_name',
      value: 'peento'
    }, callback);
  });

};

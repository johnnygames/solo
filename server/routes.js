
module.exports = function(app) {

  app.use('/api/todo', require('./api/todo'));
  
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};

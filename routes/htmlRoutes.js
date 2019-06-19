module.exports = app => {
  app.get('/', function(req, res) {
    res.render('home', {
      title: 'Home',
      css: ['styles.css']
    });
  });

  app.get('/portfolio', function (req,res) {
    res.render('portfolio', {
      css: ['styles.css'],
      title: 'Portfolio'
    });
  });

  app.get('/contact', function (req,res) {
    res.render('contact', {
      css: ['styles.css'],
      title: 'Contact Me'
    });
  });
}

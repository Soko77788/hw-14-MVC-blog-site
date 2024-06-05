const router = require('express').Router();

// Example route to render homepage
router.get('/', (req, res) => {
  try {
  res.render('home')
  } catch(err) {
    res.status(500).send('Error rendering home route')
  }
});

router.get('/dashboard', (req, res) => {
  try {
  res.render('dashboard')
  } catch(err) {
    res.status(500).send('Error rendering dashboard route')
  }
});




router.get('/login', (req, res) => {
  try {
  res.render('login')
  } catch(err) {
    res.status(500).send('Error rendering login route')
  }
});

module.exports = router;

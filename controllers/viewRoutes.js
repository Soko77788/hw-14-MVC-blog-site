const router = require('express').Router();
const { User, Post } = require('../models')

// Example route to render homepage
router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));
console.log(posts)
  res.render('home', { posts });
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

router.get('/blogpost/:id', (req, res) => {
  try {
  res.render('blogpost')
  } catch(err) {
    res.status(500).send('Error rendering blogpost route')
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

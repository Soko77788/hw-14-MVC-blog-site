const router = require('express').Router();
const { User, Post, Comment } = require('../models')

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

router.get('/blogpost/:id', async (req, res) => {
  const { id } = req.params
  try {
    const postData = await Post.findByPk(id, { 
      include: [
        {
          model: User,
          attributes: ['name'],
        },
          {
            model: Comment,
            include: [User],
          },
      ],
    })

    const post = postData.get({ plain: true })
    console.log('Post Data:', post);
  res.render('blogpost', post)
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

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

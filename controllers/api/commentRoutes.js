const router = require('express').Router();
const { Comment, User } = require('../../models');
const withAuth = require('../../utils/authMiddleware'); // Assuming you have authentication middleware

// Route to get all comments
router.get('/', async (req, res) => {
  try {
    const commentData = await Comment.findAll({
      include: [
        { model: User, attributes: ['id', 'name'] }
      ]
    });
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});



// Route to create a new comment
router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    const commentWithUser = await Comment.findByPk(newComment.id, {
      include: {
        model: User,
        attributes: ['name'],
      },
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});



module.exports = router;

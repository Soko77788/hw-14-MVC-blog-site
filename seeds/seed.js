const sequelize = require('./config/connection');
const { User, Post, Comment } = require('./models');

const userData = require('./seeds/userData.json');
const postData = require('./seeds/postData.json');
const commentData = require('./seeds/commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Post.bulkCreate(postData, {
    returning: true,
  });

  await Comment.bulkCreate(commentData, {
    returning: true,
  });

  console.log('Database seeded successfully');
  process.exit(0);
};

seedDatabase();


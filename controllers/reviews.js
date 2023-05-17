const Article = require('../models/article');

module.exports = {
  create
};

async function create(req, res) {
  const article = await Article.findById(req.params.id);
  // We can push (or unshift) subdocs into Mongoose arrays
  article.reviews.push(req.body);
  try {
    // Save any changes made to the movie doc
    await article.save();
  } catch (err) {
    console.log(err);
  }
  // Step 5:  Respond to the Request (redirect if data has been changed)
  res.redirect(`/articles/${article._id}`);
}
const Article = require('../models/article');

module.exports = {
  create,
  delete: deleteReview
};

async function deleteReview(req, res) {
  const article = await Article.findOne({ 'reviews._id': req.params.id, 'reviews.user': req.user._id });
  if (!article) return res.redirect('/articles');
  article.reviews.remove(req.params.id);
  await article.save();
  res.redirect(`/articles/${article._id}`);
}

async function create(req, res) {
  const movie = await Movie.findById(req.params.id);

  // Add the user-centric info to req.body (the new review)
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;

  // We can push (or unshift) subdocs into Mongoose arrays
  movie.reviews.push(req.body);
  try {
    // Save any changes made to the movie doc
    await movie.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect(`/movies/${movie._id}`);
}
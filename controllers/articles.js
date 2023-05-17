const Article = require('../models/article');
const Discover = require('../models/discover');

module.exports = {
  index,
  show,
  new: newArticle,
  create
};

async function index(req, res) {
  const articles = await Article.find({});
  res.render('articles/index', { title: 'All Articles', articles });
}

async function show(req, res) {
  // Populate the cast array with performer docs instead of ObjectIds
  const article = await Article.findById(req.params.id).populate('cast');
  // Mongoose query builder approach to retrieve performers not the movie:
    // Performer.find({}).where('_id').nin(movie.cast)
  // The native MongoDB approach uses a query object to find 
  // performer docs whose _ids are not in the movie.cast array like this:
  const discovers = await Discover.find({ _id: { $nin: article.cast } }).sort('name');
  res.render('articles/show', { title: 'Article Detail', article, performers });
}

function newArticle(req, res) {
  // We'll want to be able to render an  
  // errorMsg if the create action fails
  res.render('articles/new', { title: 'Add Article', errorMsg: '' });
}

async function create(req, res) {
  // convert nowShowing's checkbox of nothing or "on" to boolean
  req.body.nowShowing = !!req.body.nowShowing;
  // Remove empty properties so that defaults will be applied
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  try {
    // Update this line because now we need the _id of the new movie
    const article = await Article.create(req.body);
    // Redirect to the new movie's show functionality 
    res.redirect(`/movies/${movie._id}`);
  } catch (err) {
    // Typically some sort of validation error
    console.log(err);
    res.render('articles/new', { errorMsg: err.message });
  }
}
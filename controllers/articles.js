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
  
  const article = await Article.findById(req.params.id).populate('cast');
  const discovers = await Discover.find({ _id: { $nin: article.cast } }).sort('name');
  res.render('articles/show', { title: 'Article Detail', article, performers });
}

function newArticle(req, res) {
  res.render('articles/new', { title: 'Add Article', errorMsg: '' });
}

async function create(req, res) {
  req.body.nowShowing = !!req.body.nowShowing;
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  try {
    const article = await Article.create(req.body);
    res.redirect(`/articles/${article._id}`);
  } catch (err) {
    console.log(err);
    res.render('articles/new', { errorMsg: err.message });
  }
}
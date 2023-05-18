const Article = require('../models/article');

const index = async (req, res) => {
  const articles = await Article.find({})
  res.render('articles/index', {articles, title: 'home'})
}

const newArticle = (req, res) => {
  res.render('articles/new', { article: new Article() })
}

const edit = async (req, res) => {
  const article = await Article.findById(req.params.id)
  res.render('articles/edit', { article: article })
}

const show = async (req, res) => {
  const article = await Article.findOne({ slug: req.params.slug })
  if (article == null) res.redirect('/')
  res.render('articles/show', { article: article })
}

const create = async (req, res, next) => {
  req.article = new Article()
  next()
}

const update = async (req, res, next) => {
  req.article = await Article.findById(req.params.id)
  next()
}

const deleteArticle = async (req, res) => {
  await Article.findByIdAndDelete(req.params.id)
  res.redirect('/')
}

const saveArticleAndRedirect = (path) => {
  return async (req, res) => {
    let article = req.article
    article.title = req.body.title
    article.description = req.body.description
    article.markdown = req.body.markdown
    try {
      article = await article.save()
      res.redirect(`/articles/${article.slug}`)
    } catch (e) {
      res.render(`articles/${path}`, { article: article })
    }
  }
}

module.exports = {
  index,
  new: newArticle,
  edit,
  show,
  create,
  update,
  delete: deleteArticle,
  saveArticleAndRedirect
};

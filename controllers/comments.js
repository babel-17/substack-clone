const Article = require('../models/article');

module.exports = {
    create
};

async function create(req, res) {
    const article = await Article.findById(req.params.id);
    article.comments.push(req.body);
    try{
        await article.save();
    } catch (err) {
    console.log(err);
    }
    res.redirect(`/articles/${article._id}`)
}

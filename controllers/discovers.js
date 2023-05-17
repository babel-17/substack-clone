const Discover = require('../models/discover');
const Article = require('../models/article');

module.exports = {
  new: newDiscover,
  create,
  addToCast
};

async function addToCast(req, res) {
  const article = await Article.findById(req.params.id);
  // The cast array holds the performer's ObjectId (referencing)
  article.cast.push(req.body.performerId);
  await article.save();
  res.redirect(`/articles/${article._id}`);
}

async function newDiscover(req, res) {
  //Sort performers by their name
  const discovers = await Discover.find({}).sort('name');
  res.render('discovers/new', { title: 'Add Discover', discovers });
}

async function create(req, res) {
  // Need to "fix" date formatting to prevent day off by 1
  // This is due to the <input type="date"> returning the date
  // string in this format:  "YYYY-MM-DD"
  // https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off
  // Fix by either reformatting to "MM-DD-YYYY" or by 
  // appending a "time" fragment like this... 
  req.body.born += 'T00:00';
  try {
    await Discover.create(req.body);
  } catch (err) {
    console.log(err);
  }
  res.redirect('/discovers/new');
}
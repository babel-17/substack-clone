const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content: {
    type: String, 
    required: true
  } 
}, {
  timestamps: true
});

const articleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  markdown: {
    type: String,
    required: true
  },
  comments: [commentSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Article', articleSchema);
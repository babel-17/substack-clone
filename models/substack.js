const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const substackSchema = new Schema({
    title: String,
    releaseYear: Number,
    mpaaRating: String,
    cast: [String]
  }, {
    timestamps: true
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Substack', substackSchema);  
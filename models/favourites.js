const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favSchema = new Schema({
    user: {
        type: String,
        required: true,
    },
    favourites: {
        type: Array,
        required: true
    }
}, {timestamps: true});

const Fav = mongoose.model('Favourite', favSchema);
module.exports = Fav;
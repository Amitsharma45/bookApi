const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const booksData = new Schema({
    _id: {
        type: String,
        required: true
    },
    bookname: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('book', booksData, 'books');

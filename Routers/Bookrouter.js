const express = require("express");
const {getBooks, addBook, getBook, updateBook, deleteBook } =require('../Controllers/Bookcontoller');
const router = express.Router();

router.get('/getbooks',getBooks);
router.get('/getBooks/:id',getBook);
router.post('/addBook',addBook);
router.put('/updateBook/:id', updateBook);
router.delete('/deleteBook/:id', deleteBook);

module.exports = router ;
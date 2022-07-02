const { v4: uuidv4 } = require("uuid");
const booksData = require("../Modules/Booksmodule");
const getBooks = (req, res) => {
    booksData.find({}, (err, data) => {
        if (!err) {
            res.status(200).send(data);
        }
    });
};
const getBook = (req, res) => {
    booksData.findOne({ _id: req.params.id }, (err, data) => {
        if (data !== null) {
            res.status(200).send(data);
        }
        else if (data == null) {
            res.status(404).send({ status: 404, message: `User with specified id: ${req.params.id} does not exists` });
        } else {
            throw err;
        }
    });
};
const addBook = (req, res) => {
    const newbook = new booksData({
        _id: uuidv4(),
        bookname: req.body.bookname,
        price: req.body.price,
        author: req.body.author,
        publisher: req.body.publisher,
    });
    newbook.save((err) => {
        if (!err) {
            res.status(201).send("Book added success");
        } else {
            res.status(404).send("Some thing wrong");
        }
    });
};
const updateBook = (req,res) =>{
    let updatebook = new booksData({
        bookname: req.body.bookname,
        price: req.body.price,
        author: req.body.author,
        publisher: req.body.publisher,
    });
    booksData.findOneAndUpdate({ _id : req.params.id} , updatebook ,(err,data) =>{
        if(!err){
            res.status(200).send("Data is update");
        }else{
            res.status(404).send("Some thing want wrong ")
        }
    });
    
}
const deleteBook = (req,res) =>{
    booksData.deleteOne( { _id : req.params.id} , (err,data)=>{
        if(!err){
            res.status(200).send("Data is deleted success")
        }else{
            res.status(404).send('Invalid Id');
        }
    })
}

module.exports = { getBooks, addBook, getBook , updateBook , deleteBook};

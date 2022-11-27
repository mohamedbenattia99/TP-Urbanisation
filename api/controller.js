'use strict'
var mongoose = require('mongoose')
Book = mongoose.model('Books');

exports.getAllBooks = function(req, res) {
  Book.find({}, function(err, book) {
    if (err) {
      res.status(400).send(err);
    } else {
      res.json(book);
    }
  });
};

// Create a new book
exports.createBook = function(req, res) {
  var new_book = new Book(req.body);
  new_book.save(function(err, book) {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(201).json(book);
    }
  });
};

// Retrieve a book by bookName
exports.getBookByName = function(req, res) {
  Book.findOne({_name: req.params.bookName}, function(err, book) {
    if (err) {
      res.status(404).send({ error: { errors: [ { domain: 'global', reason: 'notFound', message: 'Not Found', 
                            description: 'Couldn\'t find the requested bookName \'' + req.params.bookName + '\'' } ], err, code: 404 } })
    } else {
      res.json(book);
    }
  });
};

// Edit a book by bookName
exports.editBookByName = function(req, res) {
  Book.findOneAndUpdate({_name: req.params.bookName}, req.body, {new: true}, function(err, book) {
    if (err) {
      res.status(400).send(err);
    } else {
      res.json(book);
    }
  });
};

// Delete a book by bookName
exports.deleteBookByName = function(req, res) {
Book.deleteOne({
    _name: req.params.bookName
  }, function(err, book) {
    if (err) {
      res.status(404).send({ error: { errors: [ { domain: 'global', reason: 'notFound', message: 'Not Found', 
                            description: 'Couldn\'t find the requested bookName \'' + req.params.bookName + '\'' } ], code: 404, message: 'Not Found' } })
    } else {
      res.status(204).send();
      //res.json({ message: 'Book successfully deleted' });
    }
  }); 
}

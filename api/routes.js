'use strict'
var booksList = require('./controller');

module.exports = function(app) {
  app.route('/books')
    .get(booksList.getAllBooks)
    .post(booksList.createBook);

  app.route('/books/:bookName')
    .get(booksList.getBookByName)
    .put(booksList.editBookByName)
    .delete(booksList.deleteBookByName);
};
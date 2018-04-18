import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book'

class Bookshelf extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        shelfTitle: PropTypes.string.isRequired,
        moveBook: PropTypes.func.isRequired
    }

    render() {
        const { books, moveBook, shelfTitle } = this.props
        return (
            <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfTitle}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                  {books.map((book) => (
                      <li key={book.id}>
                          <Book book={book} moveBook={moveBook}/>
                      </li>
                  ))}
              </ol>
            </div>
          </div>
        )
    }
}

export default Bookshelf

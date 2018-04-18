import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookshelfChanger extends Component {
    static propTypes = {
        moveBook: PropTypes.func.isRequired
    }

    render() {
        const { book, moveBook } = this.props
        return (
            <div className="book-shelf-changer">
            <select value={book.shelf} onChange={(event) => moveBook(book, event.target.value)} >
              <option value="moveTo" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
            </div>
        )
    }
}

export default BookshelfChanger

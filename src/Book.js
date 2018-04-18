import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookshelfChanger from './BookshelfChanger'

class Book extends Component {
    static propTypes = {
        moveBook: PropTypes.func.isRequired
    }

    render() {
        const { book, moveBook } = this.props
        return (
            <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
                <BookshelfChanger book={ book } moveBook={ moveBook } />
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
            </div>
        )
    }
}

export default Book

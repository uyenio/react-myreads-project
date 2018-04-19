import React from 'react';
import PropTypes from 'prop-types';
import BookshelfChanger from './BookshelfChanger'

const Book = ({book, moveBook}) => { 
    return (
        <div className="book">
        <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
            <BookshelfChanger book={ book } moveBook={ moveBook } />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
        </div>
    );
};

Book.propTypes = {
    moveBook: PropTypes.func.isRequired
};

export default Book

import React from 'react';
import PropTypes from 'prop-types';
import BookshelfChanger from './BookshelfChanger'

const Book = ({book, moveBook}) => { 
    const style = { 
        width: 128, 
        height: 193, 
        backgroundImage: typeof(book.imageLinks) !== 'undefined' ? `url('${book.imageLinks.thumbnail}')` : 'none'
    };
    
    return (
        <div className="book">
        <div className="book-top">
            <div className="book-cover" style={style}></div>
            <BookshelfChanger book={ book } moveBook={ moveBook } />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{typeof(book.authors) !== 'undefined' ? book.authors : 'Not Available'}</div>
        </div>
    );
};

Book.propTypes = {
    moveBook: PropTypes.func.isRequired
};

export default Book

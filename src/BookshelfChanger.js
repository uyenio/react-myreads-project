import React from 'react';
import PropTypes from 'prop-types';

const BookshelfChanger = ({ book, moveBook }) => {
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
    );
}

BookshelfChanger.propTypes = {
    moveBook: PropTypes.func.isRequired
}

export default BookshelfChanger

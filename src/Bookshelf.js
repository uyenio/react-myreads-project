import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book'

const Bookshelf = ({ books, moveBook, shelfTitle }) => {
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
    );
}

Bookshelf.propTypes = {
    books: PropTypes.array.isRequired,
    shelfTitle: PropTypes.string.isRequired,
    moveBook: PropTypes.func.isRequired
}

export default Bookshelf

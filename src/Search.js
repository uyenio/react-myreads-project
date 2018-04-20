import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book'
import { Link } from 'react-router-dom'

const Search = ({closeSearch, query, search, searchBookResults, moveBook}) => {
  return (
    <div className="search-books">
        <div className="search-books-bar">
        <Link to='/' className="close-search" onClick={closeSearch}>Close</Link>
        <div className="search-books-input-wrapper">
            {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author" 
            value={query} onChange={(event) => search(event.target.value)}/>
        </div>
        </div>
        <div className="search-books-results">
        <ol className="books-grid">
            {searchBookResults.map((book) => (
            <li key={book.id}>
                <Book book={book} moveBook={moveBook}/>
            </li>
            ))}
        </ol>
        </div>
    </div>
  );
}

Search.propTypes = {
  searchBookResults: PropTypes.array.isRequired,
  moveBook: PropTypes.func.isRequired,
  closeSearch: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired
}

export default Search

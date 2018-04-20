import React from 'react';
import PropTypes from 'prop-types';
import ListBookshelves from './ListBookshelves'
import { Link, Route } from 'react-router-dom'
import Search from './Search'

const Routes = ({closeSearch, query, search, searchBookResults, books, moveBook}) => {
  return (
    <div>
        <Route path='/search' render={() => (
          <Search closeSearch={closeSearch}  query={query} search={search} searchBookResults={searchBookResults} moveBook={moveBook}/>
        )} />
        <Route exact path='/' render={() => (
          <div>
            <ListBookshelves books={books} moveBook={moveBook}/>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
        </div>
        )}/>
    </div>
  );
}

Routes.propTypes = {
  searchBookResults: PropTypes.array.isRequired,
  books: PropTypes.array.isRequired,
  moveBook: PropTypes.func.isRequired,
  closeSearch: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired
}

export default Routes

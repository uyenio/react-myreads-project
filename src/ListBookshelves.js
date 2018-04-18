import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Bookshelf from './Bookshelf';

class ListBookshelves extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        moveBook: PropTypes.func.isRequired
    }

    render() {
        const { books, moveBook } = this.props
        return (
            <div className="list-books">
   
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Bookshelf books={ books.filter((book) => book.shelf === 'currentlyReading') } moveBook={ moveBook } shelfTitle="Currently Reading"/>
                <Bookshelf books={ books.filter((book) => book.shelf === 'wantToRead') } moveBook={ moveBook } shelfTitle="Want To Read"/>
                <Bookshelf books={ books.filter((book) => book.shelf === 'read') } moveBook={ moveBook } shelfTitle="Read"/>
              </div>
            </div>
          </div>
        )
    }
}

export default ListBookshelves

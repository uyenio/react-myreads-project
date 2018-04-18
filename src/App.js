import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBookshelves from './ListBookshelves'
import Book from './Book'
import { Link, Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: [],
    foundBooks: [],
    searchBookResults: [],
    query: ''
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState( { books })
    })
  }

  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(book => {
      BooksAPI.getAll().then((books) => {
        this.setState( { books })
      })
    })
  }

  search = (query) => {
    this.setState({ query: query.trim() })
    if (query.trim() === "") {
      this.setState({ searchBookResults: [] })
    } else {
      BooksAPI.search(query).then((foundBooks) => {
        if (foundBooks["error"] === "empty query") {
          this.setState({ searchBookResults: [] })
        } else {
          foundBooks.map(fb => fb['shelf'] = 'none');
          foundBooks.forEach(fb => {
            this.state.books.forEach (b => {
              if (fb.id === b.id) {
                fb['shelf'] = b['shelf'];
              }
            })
          });
          this.setState( { searchBookResults: foundBooks })
        }
      })
    }
  }

  closeSearch = () => {
    this.setState({ searchBookResults: [] })
  }

  render() {
    return (
      <div className="app">
      <Route path='/search' render={() => (
        <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search" onClick={this.closeSearch}>Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author" 
            value={this.query} onChange={(event) => this.search(event.target.value)}/>
          </div>
        </div>
          <div className="search-books-results">
          <ol className="books-grid">
            {this.state.searchBookResults.map((book) => (
              <li key={book.id}>
                <Book book={book} moveBook={this.moveBook}/>
              </li>
            ))}
          </ol>
        </div>
      </div>
      )} />
      <Route exact path='/' render={() => (
        <div>
          <ListBookshelves books={this.state.books} moveBook={this.moveBook}/>
          <div className="open-search">
            <Link to='/search'>Add a book</Link>
          </div>
       </div>
      )}/>
      </div>
    )
  }
}

export default BooksApp

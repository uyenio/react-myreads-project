import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBookshelves from './ListBookshelves';
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
                  <div className="book">
                  <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
                      <div className="book-shelf-changer">
                      <select value={book.shelf} onChange={(event) => this.moveBook(book, event.target.value)} >
                        <option value="moveTo" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                      </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors}</div>
                  </div>
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

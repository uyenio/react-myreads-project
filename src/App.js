import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Routes from './Routes'

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
        <Routes closeSearch={this.closeSearch}  query={this.state.query} search={this.search} searchBookResults={this.state.searchBookResults} books={this.state.books} moveBook={this.moveBook}/>
      </div>
    )
  }
}

export default BooksApp

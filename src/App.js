import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import ListBooks from './components/ListBooks'
import SearchBooks from './components/SearchBooks'
import * as BooksAPI from './utils/BooksAPI'

import './App.css'

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books || []});
    }).catch(error => {
      this.setState({ books: []});
    })
  }

  onUpdateBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(resp => {
      book.shelf = shelf;
      this.setState(prevState => ({
        books: prevState.books.filter(b => b.id !== book.id).concat(book)
      }));
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks 
            books={this.state.books}
            onUpdateBook={this.onUpdateBook} />
        )} />
        <Route path="/search" render={() => (
          <SearchBooks
            books={this.state.books}
            onUpdateBook={this.onUpdateBook} />
        )} />
      </div>
    )
  }
}

export default BooksApp

import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import ListBooks from './components/ListBooks'
import SearchBooks from './components/SearchBooks'
import * as BooksAPI from './utils/BooksAPI'

import './App.css'

class BooksApp extends Component {
  state = {
    listBooks: [],
    listSearchBooks: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((resp) => {
      if (resp) {
        this.setState({
          listBooks: resp,
          listSearchBooks: []
        })
      }
    }).catch(error => {
      this.setState({ listBooks: [], listSearchBooks: [] })
    })
  }

  onSearchBooks = (query) => {
    if (query) {
      BooksAPI.search(query).then(resp => {
        this.setState({
          listSearchBooks: this.onUpdateSelfSearchBooks(resp)
        })
      }).catch(error => {
        this.setState({ listSearchBooks: [] })
      })
    }
  }

  onUpdateSelfSearchBooks = (listSearchBooks) => {
    if (Array.isArray(listSearchBooks)) {
      return listSearchBooks
    //   return listSearchBooks.map(searchBook => {
    //     this.state.listBooks
    //       .filter(book => searchBook.id === book.id)
    //       .map(book => searchBook.shelf = book.shelf)

    //     return searchBook
    //   })
    }

    return []
  }

  onUpdateBook = (book, shelf) => {
    if (shelf) {
      BooksAPI.update(book, shelf).then(res => {
        book.shelf = shelf
      })
    }
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks 
            books={this.state.listBooks}
            onUpdateBook={this.onUpdateBook} />
        )} />
        <Route path="/search" render={({ history }) => (
          <SearchBooks
            books={this.state.listSearchBooks}
            onSearchBooks={this.onSearchBooks}
            onUpdateBook={this.onUpdateBook} />
        )} />
      </div>
    )
  }
}

export default BooksApp

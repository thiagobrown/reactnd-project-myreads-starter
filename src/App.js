import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import ListBooks from './components/ListBooks'
import SearchBooks from './components/SearchBooks'
import * as BooksAPI from './utils/BooksAPI'

import './App.css'

class App extends Component {
  state = {
    books: [],
    isLoading: false
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books || [], isLoading: false });
    }).catch(error => {
      this.setState({ books: [], isLoading: false });
    });
  }

  onUpdateBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(resp => {
      book.shelf = shelf;
      this.setState(prevState => ({
        books: prevState.books.filter(b => b.id !== book.id).concat(book)
      }));
    });
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" render={() => (
            <ListBooks
              books={this.state.books}
              loading={this.state.isLoading}
              onUpdateBook={this.onUpdateBook} />
          )} />
          <Route path="/search" render={() => (
            <SearchBooks
              books={this.state.books}
              onUpdateBook={this.onUpdateBook} />
          )} />
          <Redirect to="/" />
        </Switch>
      </div>
    )
  }
}

export default App;

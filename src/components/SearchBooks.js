import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import * as BooksAPI from './../utils/BooksAPI'

import Book from './Book'

class SearchBooks extends Component {

    state = {
        searchBooks: []
    }

    onSearch = (query) => {
        BooksAPI.search(query, 20).then((books) => {
            this.setState({ searchBooks: this.onChangeShelfSearchBooks(books) });
        }).catch(error => this.setState({ searchBooks: [] }));
    }

    onChangeShelfSearchBooks = (searchBooks) => {
        if (searchBooks && Array.isArray(searchBooks)) {
            searchBooks.forEach(searchBook => {
                searchBook.shelf = "none";
                this.props.books.forEach(book => {
                    if (searchBook.id === book.id) {
                        searchBook.shelf = book.shelf;
                    }
                });
            });

            return searchBooks;
        }

        return [];
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/" />
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" onChange={event => this.onSearch(event.target.value)} />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.searchBooks.map(b => (<Book key={b.id} book={b} onUpdateBook={this.props.onUpdateBook} />))}
                    </ol>
                </div>
            </div>
        )
    }
}

SearchBooks.propTypes = {
    books: PropTypes.array,
    onUpdateBook: PropTypes.func.isRequired
}

export default SearchBooks;

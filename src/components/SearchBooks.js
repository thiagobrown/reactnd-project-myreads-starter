import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Debounce } from 'react-throttle';
import PropTypes from 'prop-types'

import * as BooksAPI from './../utils/BooksAPI'

import Book from './Book'
import Loader from './Loader'

class SearchBooks extends Component {

    state = {
        searchBooks: [],
        isLoading: false
    }

    static propTypes = {
        books: PropTypes.array,
        onUpdateBook: PropTypes.func.isRequired
    }

    onSearch = (query) => {
        if (query && query.length) {
            this.setState({ isLoading: true });
            BooksAPI.search(query, 20).then((books) => {
                this.setState({
                    searchBooks: this.onChangeShelfSearchBooks(books),
                    isLoading: false
                });
            }).catch(error => this.setState({ searchBooks: [] }));
        } else {
            this.setState({
                searchBooks: [],
                isLoading: false
            });
        }
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
                        <Debounce time="500" handler="onChange">
                            <input
                                type="text"
                                placeholder="Search by title or author"
                                onChange={event => this.onSearch(event.target.value)} />
                        </Debounce>
                    </div>
                </div>
                <div className="search-books-results">
                    {
                        this.state.isLoading
                            ? (<Loader />)
                            : (
                                <ol className="books-grid">
                                    {this.state.searchBooks.map(b => (
                                        <Book key={b.id} book={b} onUpdateBook={this.props.onUpdateBook} />
                                    ))}
                                </ol>
                            )
                    }
                </div>
            </div>
        )
    }
}

export default SearchBooks;

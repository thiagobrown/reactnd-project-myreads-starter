import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import Book from './Book'

const SearchBooks = ({ books = [], onSearchBooks, onUpdateBook }) => (
    <div className="search-books">
        <div className="search-books-bar">
            <Link className="close-search" to="/" />
            <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" onChange={event => onSearchBooks(event.target.value)} />
            </div>
        </div>
        <div className="search-books-results">
            <ol className="books-grid">
                {books.map(b => (<Book key={b.id} book={b}  onUpdateBook={onUpdateBook} />))}
            </ol>
        </div>
    </div>
)

SearchBooks.propTypes = {
    books: PropTypes.array,
    onSearchBooks: PropTypes.func.isRequired,
    onUpdateBook: PropTypes.func.isRequired
}

export default SearchBooks

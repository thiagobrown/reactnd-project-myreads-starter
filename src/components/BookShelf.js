import React from 'react'
import PropTypes from 'prop-types'

import Book from './Book'

const BookShelf = ({ title, books = [], onUpdateBook }) => {
     return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map(b => (
                        <Book key={b.id} book={b} onUpdateBook={onUpdateBook} />
                    ))}
                </ol>
            </div>
        </div>
    )
}

BookShelf.propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array,
    onUpdateBook: PropTypes.func.isRequired
}

export default BookShelf
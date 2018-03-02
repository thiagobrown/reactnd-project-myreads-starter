import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import BookShelf from './BookShelf'

const ListBooks = ({ books = [], onUpdateBook }) => {

    let titles = [];

    if (books) {
        titles = Array.from(new Set(books.filter(book => book.shelf !== "none").map(book => book.shelf)))
    }

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    {titles.map(t => (
                        <BookShelf key={t} title={t}
                            books={books.filter(b => b.shelf === t)}
                            onUpdateBook={onUpdateBook} />
                    ))}
                </div>
            </div>
            <div className="open-search">
                <Link to="/search" />
            </div>
        </div>
    )
}

ListBooks.propTypes = {
    books: PropTypes.array,
    onUpdateBook: PropTypes.func.isRequired
}

export default ListBooks
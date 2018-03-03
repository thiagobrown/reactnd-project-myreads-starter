import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import BookShelf from './BookShelf'
import Loader from './Loader'
import { shelfs } from './../utils/constants'

const ListBooks = ({ books = [], loading = false, onUpdateBook }) => {

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                {
                    loading
                        ? <Loader />
                        : (
                            <div>
                                {shelfs.map(s => (
                                    <BookShelf key={s.shelf} title={s.title}
                                        books={books.filter(book => book.shelf === s.shelf)}
                                        onUpdateBook={onUpdateBook} />
                                ))}
                            </div>
                        )
                }
            </div>
            <div className="open-search">
                <Link to="/search" />
            </div>
        </div>
    )
}

ListBooks.propTypes = {
    books: PropTypes.array,
    loading: PropTypes.bool,
    onUpdateBook: PropTypes.func.isRequired
}

export default ListBooks;
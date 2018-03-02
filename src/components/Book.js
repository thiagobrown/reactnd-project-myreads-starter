import React from 'react'
import PropTypes from 'prop-types'

import BookShelfChanger from './BookShelfChanger'

const Book = ({ book, onUpdateBook }) => {
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}>
                    </div>
                    <BookShelfChanger book={book} onUpdateBook={onUpdateBook} />
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors && book.authors.length > 1 ? book.authors.join(", ") : book.authors}</div>
            </div>
        </li>
    )
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    onUpdateBook: PropTypes.func.isRequired
}

export default Book;

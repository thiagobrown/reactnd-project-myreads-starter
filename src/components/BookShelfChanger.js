import React from 'react'
import PropTypes from 'prop-types'

const BookShelfChanger = ({ book, onUpdateBook }) => {
  return (
    <div className="book-shelf-changer">
      <select value={book.shelf}
        onChange={(e) => onUpdateBook(book, e.target.value)}>
        <option value="" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  )
}

BookShelfChanger.propTypes = {
  book: PropTypes.object.isRequired,
  onUpdateBook: PropTypes.func.isRequired
}

export default BookShelfChanger;

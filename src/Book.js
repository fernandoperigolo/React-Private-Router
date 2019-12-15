import React from 'react'
import { Link } from 'react-router-dom'
import BOOKS from './BOOKS'

function Book(props) {
  console.log('Book props', props)
  const { bookId } = props.match.params
  return (
    <div className="Book">
      <h4>{BOOKS[bookId].title}</h4>
      <p><em>Book description</em></p>
      <p>Pages: {BOOKS[bookId].pages}</p>
      <p>ID: {BOOKS[bookId].id}</p>
      <Link to="/books">Back to books</Link>
    </div>
  )
}

export default Book

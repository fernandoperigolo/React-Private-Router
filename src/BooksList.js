import React from 'react'
import BooksListItem from './BooksListItem'
import BOOKS from './BOOKS'

function BooksList(props) {
  console.log('BooksList props', props)
  return (
    <div className="BooksList">
      {Object.keys(BOOKS).map((book) => (
        <BooksListItem key={BOOKS[book].id} book={BOOKS[book]} />
      ))}
    </div>
  )
}

export default BooksList

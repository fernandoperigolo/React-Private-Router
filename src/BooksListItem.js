import React from 'react'
import { Link } from 'react-router-dom'

function BooksListItem(props) {
  console.log(`BooksListItem ${props.book.id} props`, props)
  return (
    <div className="BooksListItem">
      <h4>Book title: {props.book.title}</h4>
      <p>Pages: {props.book.pages}</p>
      <p>ID: {props.book.id}</p>
      <Link to={`/book/${props.book.id}`} className="BooksListItem">See this book</Link>
    </div>
  )
}

export default BooksListItem

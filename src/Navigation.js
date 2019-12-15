import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import BooksList from './BooksList'
import Book from './Book'
import Home from './Home'
import PageNotFound from './PageNotFound'

function Navigation(props) {
  console.log('Navigation props', props)
  return (
    <Switch>
      <PrivateRoute path="/books" exact component={BooksList} />
      <PrivateRoute path="/book/:bookId" exact component={Book} />
      <Route path="/page-not-dound" exact component={PageNotFound} />
      <Route path="/" exact component={Home} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  )
}

export default Navigation

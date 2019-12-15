import React from 'react'
import { Route } from 'react-router-dom'
import { useLocalStorage } from '@rehooks/local-storage'
import Forbidden from './Forbidden'

function PrivateRoute(props) {
  console.log('PrivateRoute props', props)
  const [ userPermission ] = useLocalStorage('userPermission')
  const { component: Component, ...rest } = props
  return (
    <Route {...rest} render={(props) => (
      userPermission
        ? <Component {...props} />
        : <Forbidden />
    )} />
  )
}

export default PrivateRoute

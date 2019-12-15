import React from 'react'
import { writeStorage, useLocalStorage } from '@rehooks/local-storage'
import { NavLink } from 'react-router-dom'

function Header(props) {
  console.log('Header props', props)
  const [ userPermission ] = useLocalStorage('userPermission')
  return (
    <div className="Header">
      <h1>Books</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact>Home</NavLink>
          </li>
          <li>
            <NavLink to="/books">Books</NavLink>
          </li>
        </ul>
      </nav>
      <p>
        userPermission? {userPermission ? 'True' : 'False'}
        <button onClick={() => writeStorage('userPermission', !userPermission)}>Switch Permission</button>
      </p>
    </div>
  )
}

export default Header

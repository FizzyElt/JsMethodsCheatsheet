import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import './Header.scss'

const routes = [
  {
    name: 'Array',
    url: '/Array',
  },
  {
    name: 'Object',
    url: '/Object',
  },
]

const Header = () => {
  let history = useHistory()

  const connectToHandler = url => {
    history.push(url)
  }

  return (
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand className='link' onClick={() => connectToHandler('/')}>
        JS Methods Table
      </Navbar.Brand>
      <Navbar.Collapse className='justify-content-end'>
        <Nav>
          {routes.map(({ name, url }) => (
            <Nav.Item key={name}>
              <Nav.Link onClick={() => connectToHandler(url)}>{name}</Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header

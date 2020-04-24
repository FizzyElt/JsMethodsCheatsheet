import React, { useRef } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { routes } from '../../routes'
import './Header.scss'

const Header = () => {
  let history = useHistory()
  const newroutes = useRef(routes.slice(1))
  const connectToHandler = path => {
    history.push(path)
  }
  return (
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand className='link' onClick={() => connectToHandler('/')}>
        JS Methods Cheatsheet
      </Navbar.Brand>
      <Navbar.Collapse className='justify-content-end'>
        <Nav>
          {newroutes.current.map(({ name, path }) => (
            <Nav.Item key={name}>
              <Nav.Link onClick={() => connectToHandler(path)}>{name}</Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header

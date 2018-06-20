import React, { Component } from 'react'
import Nav from 'react-bootstrap/lib/Nav'
import Navbar from 'react-bootstrap/lib/Navbar'
import NavItem  from 'react-bootstrap/lib/NavItem'
import { Link } from 'react-router-dom'
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer'

const Header = () => {
  return(
    <div> 
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <span>Logo</span>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav navbar>
            <LinkContainer to='/'>
              <NavItem>Home</NavItem>
            </LinkContainer>
            <LinkContainer to='/login'>
              <NavItem>Login</NavItem>
            </LinkContainer>
            <LinkContainer to='/calendar'>
              <NavItem>Calendar</NavItem>
            </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    </div>
  )
}

export default Header
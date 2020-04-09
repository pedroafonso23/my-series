import React, { useState } from 'react'
import {        // Chaves significa que estou pegando so uma parte do reactstrap
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler
} from 'reactstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!open)
  }
  return (
    <Navbar color='dark' light expand='md'>
      <div className='container'>
        <NavbarBrand className='text-white' tag={Link} to='/'>My Series</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={open} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <NavLink className='text-white' tag={Link} to='/series'>Series</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='text-white ml-4 ' tag={Link} to='/genres'>Genre</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  )
}

export default Header
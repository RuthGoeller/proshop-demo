import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import { FaShoppingCart, FaUser} from 'react-icons/fa'
import { LinkContainer } from 'react-router-bootstrap'
import logo from '../assets/logo.png'


function Header() {
  return (
    <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
            <Container>
           
           <LinkContainer to="/">
                <Navbar.Brand>  
                  <img src={logo} alt="proshop" />ProShop</Navbar.Brand>
                </LinkContainer>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='ml-auto'>
                  <linkContainer to="/cart">
                    <Nav.Link ><FaShoppingCart/>Cart</Nav.Link>
                    <Nav.Link><FaUser/> Sign In</Nav.Link>
                    </linkContainer>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    </header>
  )
}

export default Header
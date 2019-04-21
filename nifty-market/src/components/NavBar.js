import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../images/Logo.png';


const NavLogo = styled.img`
    height: 60px;
    width: auto;
`;


export default class NavBar extends React.Component {

    render() {
        return (
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">
                    <NavLogo src={logo} />
                </NavbarBrand>

                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Link to='/'><NavLink href="https://github.com/reactstrap/reactstrap">Home</NavLink></Link>
                    </NavItem>

                    <NavItem>
                        <Link to='/login'><NavLink href="/components/">Login</NavLink></Link>
                    </NavItem>

                    <NavItem>
                        <Link to='/register'><NavLink href="https://github.com/reactstrap/reactstrap">Sign Up</NavLink></Link>
                    </NavItem>

                    <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">FAQs</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}
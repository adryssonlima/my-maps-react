import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import StateSelect from './StateSelect';

class Menu extends Component {

    render () {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                <Navbar.Brand>
                    <a href="#">My Maps</a>
                </Navbar.Brand>
                <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>

                <Nav>
                    <NavItem><StateSelect /></NavItem>
                </Nav>

                <Nav pullRight>
                    <NavItem href="http://github.com/adryssonlima">Github</NavItem>
                    <NavItem href="http://adryssonlima.github.io">Desenvolvedor</NavItem>
                </Nav>

                </Navbar.Collapse>
            </Navbar>
        );
    }

}

export default Menu;
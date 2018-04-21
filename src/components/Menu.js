import React, { Component } from 'react';
import StateSelect from './StateSelect'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

export default class Menu extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/">My Maps</NavbarBrand>

                    <Nav navbar>
                        <NavItem><StateSelect /></NavItem>
                    </Nav>

                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="http://github.com/adryssonlima">Github</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="http://adryssonlima.github.io">Desenvolvedor</NavLink>
                            </NavItem>

                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Options
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Option 1
                                    </DropdownItem>
                                    <DropdownItem>
                                        Option 2
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Reset
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}




// import React, { Component } from 'react';
// import { Navbar } from 'react-bootstrap';
// import { Nav } from 'react-bootstrap';
// import { NavItem } from 'react-bootstrap';
// import StateSelect from './StateSelect';

// export default class Menu extends Component {

//     render () {
//         return (
//             <div className="menu">
//                 <Navbar inverse collapseOnSelect>
//                     <Navbar.Header>
//                     <Navbar.Brand>
//                         <a href="#">My Maps</a>
//                     </Navbar.Brand>
//                     <Navbar.Toggle />
//                     </Navbar.Header>
//                     <Navbar.Collapse>

//                     <Nav>
//                         <NavItem><StateSelect /></NavItem>
//                     </Nav>

//                     <Nav pullRight>
//                         <NavItem href="http://github.com/adryssonlima">Github</NavItem>
//                         <NavItem href="http://adryssonlima.github.io">Desenvolvedor</NavItem>
//                     </Nav>

//                     </Navbar.Collapse>
//                 </Navbar>
//             </div>
//         );
//     }

// }
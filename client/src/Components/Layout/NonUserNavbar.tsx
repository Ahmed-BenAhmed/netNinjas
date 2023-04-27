import React, {useState} from "react";
import {Button, Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem} from "reactstrap";
import {NetNinjaLink} from "../NetNinjaLink";

export const NonUserNavbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggle = () => setIsOpen(!isOpen);

    return <Navbar expand={true}>
            <NavbarBrand href="/">LOGO</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="me-auto" navbar>
                    <NavItem>
                        <NetNinjaLink to="/app/">Home</NetNinjaLink>
                    </NavItem>
                    <NavItem>
                        <NetNinjaLink to="/auth/login">
                            <Button>
                                Log In
                            </Button>
                        </NetNinjaLink>
                    </NavItem>
                    <NavItem>
                        <NetNinjaLink to="/auth/sign-up">
                            <Button>
                                Sign Up
                            </Button>
                        </NetNinjaLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
}
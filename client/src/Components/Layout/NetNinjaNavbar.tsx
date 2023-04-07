import React, {ReactNode, useState} from "react";
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem} from "reactstrap";
import {Link} from "react-router-dom";


interface Props {
    className?: string,
    to: string,
    children: ReactNode
}
const NetNinjaLink = ({className="",children, to, ...props}:Props) => {
    return <Link {...props} className={`${className} nav-link`} to={to}>
        {children}
    </Link>
}

export const NetNinjaNavbar = () => {
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
                        <NetNinjaLink to="/app/projects/list">
                            Project
                        </NetNinjaLink>
                    </NavItem>
                    <NavItem>
                        <NetNinjaLink to="/app/groups/list">
                            Groups
                        </NetNinjaLink>
                    </NavItem>
                    <NavItem>
                        <NetNinjaLink to="/app/workspace">
                            Workspace
                        </NetNinjaLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
}
import React from "react";
import {Outlet} from "react-router-dom";
import {Navbar, NavbarBrand} from "reactstrap";


export const AuthLayout = () => {
    return <div>
        <Navbar expand={true}>
            <NavbarBrand href="/">LOGO</NavbarBrand>
        </Navbar>
        <Outlet />
    </div>
}
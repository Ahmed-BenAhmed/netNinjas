import React from "react";
import {Outlet} from "react-router-dom";
import {Navbar, NavbarBrand} from "reactstrap";
import {LocationProvider} from "@reach/router";


export const AuthLayout = () => {
    return  <LocationProvider>
        <Navbar expand={true}>
            <NavbarBrand href="/">LOGO</NavbarBrand>
        </Navbar>
        <Outlet />
    </LocationProvider>
}
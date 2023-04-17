import React from "react";
import {Outlet} from "react-router-dom";
import {NetNinjaNavbar} from "./NetNinjaNavbar";
import {Container} from "reactstrap";


export const UserLayout = () => {
    return <div>
        <NetNinjaNavbar />
        <Container>
            <Outlet />
        </Container>
    </div>
}
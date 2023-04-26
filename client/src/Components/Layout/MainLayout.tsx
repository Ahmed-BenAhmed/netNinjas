import React from "react";
import {Outlet} from "react-router-dom";
import {Container} from "reactstrap";
import {NonUserNavbar} from "./NonUserNavbar";


export const MainLayout = () => {
    return <div>
        <NonUserNavbar />
        <Container>
        <Outlet />
        </Container>
    </div>
}
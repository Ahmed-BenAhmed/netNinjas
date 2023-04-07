import React from "react";
import { Outlet } from "react-router-dom";
import {NetNinjaNavbar} from "./NetNinjaNavbar";


export const UserLayout = () => {
    return <div>
        <NetNinjaNavbar />
        <Outlet />
    </div>
}
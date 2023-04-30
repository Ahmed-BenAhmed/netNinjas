import React, {useEffect} from "react";
import {Outlet} from "react-router-dom";
import {NetNinjaNavbar} from "./NetNinjaNavbar";
import {Container} from "reactstrap";
import {useAxios} from "../../shared/customHooks/UseAxios";
import {useStore} from "../../shared/customHooks/useStore";
import {User} from "../../shared/model/UserModel";


export const UserLayout = () => {
    const {data:users, isLoading, error} = useAxios<User[]>({
        url: "/users",
        method: "get"
    })
    const setUsers = useStore((state)=> state.setUsers)

    useEffect(()=>{
        if(users){
            setUsers(users)
        }
    },[isLoading])

    return <div>
        <NetNinjaNavbar />
        <Container>
            <Outlet />
        </Container>
    </div>
}
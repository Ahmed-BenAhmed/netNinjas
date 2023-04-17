import React, {useEffect} from "react";
import {Group} from "../shared/model/GroupModel";
import {useStore} from "../shared/customHooks/useStore";
import {CreateGroupComponent} from "../Components/Group/Create/CreateGroupComponent";
import {useAxios} from "../shared/customHooks/UseAxios";


export const GroupsPage = () => {

    const [modal,setGroups] = useStore(({modal,setGroups}) => [modal,setGroups])
    const {data:groups, isLoading, error} = useAxios<Group[]>({
        method: "get",
        url: "/groups"
    })

    useEffect(()=>{
        if(groups){
            setGroups(groups)
        }
    },[isLoading])
    if(isLoading){
        return <h1>Loaddinng</h1>
    }
    if(error){
        return <h1>{error.message}</h1>
    }

    return <div>
        <h1>Hello Programmer, I hope you finish your task in the minimum time possible</h1>
        <h2>Groups </h2>
        <CreateGroupComponent modal={modal} />

        <ul>
            {groups?.map((group)=> <li>{group.groupName}</li>)}
        </ul>
    </div>
}
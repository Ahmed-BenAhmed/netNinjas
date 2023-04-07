import React, {useEffect} from "react";
import {useAxios} from "../../../shared/customHooks/UseAxios";
import {Project} from "../../../shared/model/ProjectModel";
import {ProjectsListPureComponents} from "./ProjectsListPureComponents";
import {useStore} from "../../../shared/customHooks/useStore";


export const ProjectsListComponents = () => {
    const setProjects = useStore((state)=> state.setProjects)
    const {data, isLoading, error} = useAxios<Project[]>({
        method: "get",
        url: "/projects"
    })

    useEffect(()=>{
        if(data){
            setProjects(data)
        }
    },[isLoading])
    if(isLoading){
        return <h1>Loaddinng</h1>
    }
    if(error){
        return <h1>{error.message}</h1>
    }

    return <ProjectsListPureComponents />
}
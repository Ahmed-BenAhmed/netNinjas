import React from "react";
import {useParams} from "react-router-dom";
import {useAxios} from "../../../shared/customHooks/UseAxios";
import {CreateProjectPureComponent} from "../Create/CreateProjectPureComponent";
import {CreateProjectFormValues} from "../../../shared/model/FormTypes";
import {Project} from "../../../shared/model/ProjectModel";
import {Button} from "reactstrap";


export const DetailProjectComponent = () => {
    const {projectId} = useParams()
    const {data:projects, isLoading, error} = useAxios<Project[]>({
        method: "get",
        url: "/projects"
    })

    if(isLoading){
        return <h1>Loaddinng</h1>
    }
    if(error){
        return <h1>{error.message}</h1>
    }
    console.log("project",projects)
    return <div>
        <h1>Hello Programmer, I hope you finish your task in the minimum time possible</h1>
        <h2>All Projects </h2>
        {projects?.map(project => <p key={project._id}>
            {project.assignement.title}
        </p>)}
    </div>
}
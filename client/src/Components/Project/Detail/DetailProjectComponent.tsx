import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { DetailProjectPureComponent } from "./DetailProjectPureComponent";
import { Project } from "../../../shared/model/ProjectModel";

type GetProjectResponse = {
    data : Project
}

export const DetailProjectComponent = () => {

    const [project, setProject] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(undefined)

    let { projectId } = useParams();

    useEffect(() =>{
        setIsLoading(true)
        axios.get<GetprojectResponse>(`/project/${projectId}`).then((res)=>{
            setProject(res.data)
        }).catch(err => {
            setError(err.message)
        }).finally(()=>{
            setIsLoading(false)
        })
    },[])

    if(isLoading) return <p>Loading ...</p>
    if(error) return <p>{error}</p>
    return <DetailTaskPureComponent task={task} />
}
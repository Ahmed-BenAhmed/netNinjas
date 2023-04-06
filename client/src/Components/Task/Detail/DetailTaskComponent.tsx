import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios"
import { DetailTaskPureComponent } from "./DetailTaskPureComponent";
import { Task } from "../../../shared/model/TaskModel";

type GetTaskResponse = {
    data: Task
}

export const DetailTaskComponent = () => {

    const [task, setTask] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(undefined)

    let { taskId } = useParams();

    useEffect(() =>{
        setIsLoading(true)
        axios.get<GetTaskResponse>(`/task/${taskId}`).then((res)=>{
            setTask(res.data)
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
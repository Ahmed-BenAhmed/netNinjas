import React from "react";
import {DetailTaskPureComponent} from "./DetailTaskPureComponent";
import {Task} from "../../../shared/model/TaskModel";
import {useAxios} from "../../../shared/customHooks/UseAxios";

export const DetailTaskComponent = () => {
    const {data:task, isLoading, error} = useAxios<Task>({
        method: "get",
        url: "/tasks"
    })

    if(isLoading) return <p>Loading ...</p>
    if(task) {
        return <DetailTaskPureComponent task={task} />
    }
    return <> Some Error Happened In fetching data {error ? error : ""}</>
}
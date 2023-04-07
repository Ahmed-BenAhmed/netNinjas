import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios"
import { DetailTaskPureComponent } from "./DetailTaskPureComponent";
import { Task } from "../../../shared/model/TaskModel";
import {useAxios} from "../../../shared/customHooks/UseAxios";


export const DetailTaskComponent = () => {
    const {data:task, isLoading, error} = useAxios({
        method: "get",
        url: "/tasks"
    })


    if(isLoading) return <p>Loading ...</p>
    if(task) {
        return <DetailTaskPureComponent task={task}/>
    }
    return <p> Some Error Happened In fetching data {error ? error : ""}</p>
}
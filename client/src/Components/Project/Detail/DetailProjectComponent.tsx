import React from "react";
import {useParams} from "react-router-dom";


export const DetailProjectComponent = () => {
    const {projectId} = useParams()
    return <div>
        <h1>Hello Programmer, I hope you finish your task in the minimum time possible</h1>
        <h2>All Projects </h2>\

    </div>
}
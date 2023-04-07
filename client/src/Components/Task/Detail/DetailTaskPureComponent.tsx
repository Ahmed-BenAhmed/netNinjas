import React from "react";
import { Task } from "../../../shared/model/TaskModel";
import axios from "axios";


interface Props {
    task: Task
}

export const DetailTaskPureComponent = ({task}:Props)  => {
    axios.get("http://localhost:5001/tasks")
    return <div>
        <div>
            <p>
                <span>{task.group ? task.group.groupName : "Personal"}</span>
                <span>|</span>
                <span>{task.duration}</span>
            </p>
    
        </div>
        <div>
            <input type={"checkbox"} name={"task-checked"} />
            <h1>{task.title}</h1>
        </div>
        <div className="">
            <p>{task.description}</p>
        </div>
    </div>
}
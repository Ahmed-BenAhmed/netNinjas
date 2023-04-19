import React, {useState} from "react";
import {Task, TaskStatusEnum} from "../../../shared/model/TaskModel";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"
import {Input} from "reactstrap";
import axios from "axios";

dayjs.extend(relativeTime)

interface Props {
    task: Task
    withDetails: boolean
}

export const OneLineTaskComponent = ({task, withDetails}:Props)  => {
    const [currentTask, setCurrentTask] = useState<Task>(task)

    const toggleTask = () => {
        const updatedTask = {...currentTask,
            id: task._id,
            status: currentTask.status === TaskStatusEnum.ACTIVE ?
                TaskStatusEnum.COMPLETED :
                TaskStatusEnum.ACTIVE
        }
        setCurrentTask(updatedTask)
        axios<Task>({
            method: "put",
            url: `/task`,
            data: updatedTask
        })

    }
    return <div style={{justifyContent: "space-between", display: "flex"}}>
            <div style={{width: "20px"}}>
                <Input type="checkbox"
                       id={currentTask.title}
                       checked={currentTask.status === TaskStatusEnum.COMPLETED}
                       onChange={()=>{
                           toggleTask()
                       }}/>
            </div>
            <div className={"task-details"}>
                <label className={"task-title"} htmlFor={currentTask.title}>{currentTask.title}</label><br/>
                {withDetails && <p className={"task-description"}>{currentTask.description}</p>}
            </div>
        </div>
}
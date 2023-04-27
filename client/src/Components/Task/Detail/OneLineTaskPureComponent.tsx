import React, {useState} from "react";
import {Task, TaskStatusEnum} from "../../../shared/model/TaskModel";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"
import {Button, Input, PopoverBody, PopoverHeader, UncontrolledPopover} from "reactstrap";
import axios from "axios";
import {BsTrashFill} from "react-icons/bs";
import {useStore} from "../../../shared/customHooks/useStore";

dayjs.extend(relativeTime)

interface Props {
    task: Task
    withDetails: boolean
}

export const OneLineTaskComponent = ({task, withDetails}:Props)  => {
    const [currentTask, setCurrentTask] = useState<Task>(task)
    const deleteT = useStore((state) => state.updateTask)

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

    const deleteTask = () => {
        axios.put<Task>(`/task`, {...task, status: TaskStatusEnum.DELETED}).then(res => {
            setCurrentTask(res.data)
        })
    }
    return currentTask.status === TaskStatusEnum.DELETED ? <></> : <div style={{justifyContent: "space-between", display: "flex"}}>
            <div style={{width: "20px"}}>
                <Input type="checkbox"
                       id={currentTask.title}
                       checked={currentTask.status === TaskStatusEnum.COMPLETED}
                       onChange={()=>{
                           toggleTask()
                       }}/>
            </div>
            <div className={"task-details"}>
                <span>
                    <label className={"task-title"} htmlFor={currentTask.title}>
                        {currentTask.title}
                    </label>
                    <UncontrolledPopover
                        placement="bottom"
                        target={"UncontrolledPopover"+task._id}
                    >
                        <PopoverHeader>
                            This Will delete the task permenantly
                        </PopoverHeader>
                        <PopoverBody>
                            <Button type={"button"} id={"UncontrolledPopover"}>Cancel</Button>
                            <Button onClick={deleteTask}>Ok</Button>
                        </PopoverBody>
                    </UncontrolledPopover>
                    <BsTrashFill type={"button"} id={"UncontrolledPopover"+task._id} color={"#c63535"} />
                </span>
                {withDetails && <p className={"task-description"}>{currentTask.description}</p>}
            </div>
        </div>
}
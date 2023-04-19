import React, {useState} from "react";
import {Project} from "../../../shared/model/ProjectModel";
import {OneLineTaskComponent} from "../../Task/Detail/OneLineTaskPureComponent";
import dayjs from "dayjs";
import {Button} from "reactstrap";
import {CreateTaskModal} from "../../Task/Create/CreateTaskModal";
import {CreateTaskFormValues} from "../../../shared/model/FormTypes";
import {postTask} from "../../Task/taskFunctions";
import {useStore} from "../../../shared/customHooks/useStore";

interface Props {
    project: Project
}
export const DetailProjectPureComponent = ({project}:Props) => {
    const [modal, setModal] = useState(false)
    const [tasks, setTasks] = useStore(({tasks,setTasks}) => [tasks, setTasks])
    const toggle = () => setModal(!modal)
    const createTask = (data:CreateTaskFormValues) => {
        const task = {
            ...data,
            dueDate: data.date && data.time ? dayjs((`${data?.date} ${data?.time}`)).format() : dayjs().format(),
            project: project._id
        }
        postTask(task, tasks, setTasks)
        toggle()
    }

    return  <div className="task-card">
        <CreateTaskModal createTask={createTask} modal={modal} toggle={toggle} selectedProject={project._id}/>
        <div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <h4 style={{textAlign: "left"}}>Project Name: {project.assignement?.title}</h4>
                <p className={"task-info"}>
                    <span>{project.assignement.priority} {project.assignement.status} </span>
                    <span>{project.assignement.group ? project.assignement.group.groupName : "Personal"}</span>
                    {project.assignement.dueDate && <>
                        <span> | </span>
                        <span>{dayjs(project.assignement.dueDate).fromNow()}</span>
                    </>}
                </p>
            </div>
            <br/>
            <div>
                <h6>Tasks <Button onClick={toggle}>+</Button></h6>
                {project.tasks.map(task => (<div>
                    <OneLineTaskComponent task={task} withDetails={false} />
                </div>))}
            </div>
        </div>
    </div>
}
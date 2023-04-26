import React, {useEffect, useState} from "react";
import {Project} from "../../../shared/model/ProjectModel";
import {OneLineTaskComponent} from "../../Task/Detail/OneLineTaskPureComponent";
import dayjs from "dayjs";
import {Button} from "reactstrap";
import {CreateTaskModal} from "../../Task/Create/CreateTaskModal";
import {CreateTaskFormValues} from "../../../shared/model/FormTypes";
import {useStore} from "../../../shared/customHooks/useStore";
import {shallow} from "zustand/shallow";
import {Task} from "../../../shared/model/TaskModel";
import axios from "axios";

interface Props {
    project: Project
}
export const DetailProjectPureComponent = ({project}:Props) => {
    const [modal, setModal] = useState(false)
    const [tasks, setTasks] = useStore((state) => [state.tasks, state.setTasks],shallow)
    const toggle = () => setModal(!modal)
    const createTask = (data:CreateTaskFormValues) => {
        const task = {
            ...data,
            dueDate: data.date && data.time ? dayjs((`${data?.date} ${data?.time}`)).format() : dayjs().format(),
            project: project._id
        }
        axios.post<Task>("/task", task).then((res)=>{
            console.log("task created", res.data)
            setTasks([...tasks, {...res.data, project: {...res.data.project,_id: project._id}}])
        })
        toggle()
    }

    useEffect(()=>{
        if(tasks.length === 0){
            axios<Task[]>({
                method: "get",
                url: "/tasks"
            }).then((res)=>{
                setTasks(res.data)
            })
        }
    },[])
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
                {tasks.filter(task => task.project?._id === project._id).map(task => (<div>
                    <OneLineTaskComponent task={task} withDetails={false} />
                </div>))}
            </div>
        </div>
    </div>
}
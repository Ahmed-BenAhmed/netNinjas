import React, {useState} from "react";
import {useStore} from "../../../shared/customHooks/useStore";
import {CreateTaskFormValues} from "../../../shared/model/FormTypes";
import axios from "axios";
import {Task} from "../../../shared/model/TaskModel";
import {CreateTaskModal} from "./CreateTaskModal";
import dayjs from "dayjs";

interface Props {
    modal: boolean
}
export const CreateTaskComponent = ({modal}:Props) => {
    const [tasks, setTasks] = useStore(({tasks,setTasks}) => [tasks, setTasks])
    const [toggle] = useStore(({toggleModal}) => [toggleModal])
    const projects = useStore((state)=> state.projects)
    const [selectedProject, setSelectedProject] = useState<string|undefined>(undefined)
    const createTask = (data:CreateTaskFormValues) => {
        const task = {
            ...data,
            dueDate:  dayjs((`${data.date} ${data.time}`)).format(),
            project: selectedProject ? selectedProject : projects[0]._id
        }
        console.log("task to craate", task)
        axios.post<Task>("/task", task).then((res)=>{
            console.log("task created", res.data)
            setTasks([...tasks, res.data], tasks.length + 1)
        })
        toggle()
    }
    return <CreateTaskModal createTask={createTask} modal={modal} toggle={toggle}
                            selectedProject={selectedProject} setSelectedProject={setSelectedProject}/>
}
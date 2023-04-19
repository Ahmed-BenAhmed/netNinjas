import React, {useState} from "react";
import {useStore} from "../../../shared/customHooks/useStore";
import {CreateTaskFormValues} from "../../../shared/model/FormTypes";
import {CreateTaskModal} from "./CreateTaskModal";
import dayjs from "dayjs";
import {postTask} from "../taskFunctions";

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
            dueDate: data.date && data.time ? dayjs((`${data?.date} ${data?.time}`)).format() : dayjs().format(),
        }
        if(selectedProject){
            task.project =  selectedProject
        }
        console.log("task to craate", task)
        postTask(task, tasks, setTasks)
        toggle()
    }
    return <CreateTaskModal createTask={createTask} modal={modal} toggle={toggle}
                            selectedProject={selectedProject} setSelectedProject={setSelectedProject}/>
}
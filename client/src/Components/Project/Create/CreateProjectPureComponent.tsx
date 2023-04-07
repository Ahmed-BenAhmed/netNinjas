import React, {useState} from "react";
import {useAxios} from "../../../shared/customHooks/UseAxios";
import {CreateProjectFormValues} from "../../../shared/model/FormTypes";
import {Button} from "reactstrap";
import {CreateProjectModal} from "./CreateProjectModal";
import {useStore} from "../../../shared/customHooks/useStore";
import {Project} from "../../../shared/model/ProjectModel";
import axios from "axios";


export const CreateProjectPureComponent = () => {
    const [modal, setModal] = useState<boolean>(false)
    const setProjects = useStore((state)=> state.setProjects)
    const projects = useStore((state)=> state.projects)
    const {data, isLoading, error, sendData} = useAxios<Project>({
        method: "post",
        url: "/project"
    })
    const createProject = (data:CreateProjectFormValues) => {
        axios.post<Project>("/project", {assignement: data}).then((res)=>{
            setProjects([...projects, res.data])
        })
        toggle()
    }
    const toggle = () => {
        setModal(!modal)
    }

    return <div>
        <CreateProjectModal createProject={createProject} modal={modal} toggle={toggle} />
        <Button onClick={toggle}>Add Project</Button>
    </div>
}
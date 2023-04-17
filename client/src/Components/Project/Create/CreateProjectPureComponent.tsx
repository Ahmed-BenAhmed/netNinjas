import React from "react";
import {CreateProjectFormValues} from "../../../shared/model/FormTypes";
import {Button} from "reactstrap";
import {CreateProjectModal} from "./CreateProjectModal";
import {useStore} from "../../../shared/customHooks/useStore";
import {Project} from "../../../shared/model/ProjectModel";
import axios from "axios";


export const CreateProjectPureComponent = () => {

    const [setProjects, projects] = useStore(({setProjects,projects}) => [setProjects, projects])
    const [modal, toggle] = useStore(({modal,toggleModal}) => [modal,toggleModal])
    const createProject = (data:CreateProjectFormValues) => {
        axios.post<Project>("/project", {assignement: data}).then((res)=>{
            setProjects([...projects, res.data])
        })
        toggle()
    }

    return <div>
        <CreateProjectModal createProject={createProject} modal={modal} toggle={toggle} />
        <Button onClick={toggle}>Add Project</Button>
    </div>
}
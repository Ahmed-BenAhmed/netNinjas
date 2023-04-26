import React from "react";
import {CreateProjectFormValues} from "../../../shared/model/FormTypes";
import {Button} from "reactstrap";
import {CreateProjectModal} from "./CreateProjectModal";
import {useStore} from "../../../shared/customHooks/useStore";
import {Project} from "../../../shared/model/ProjectModel";
import axios from "axios";
import {shallow} from "zustand/shallow";


export const CreateProjectPureComponent = () => {

    const [setProjects, projects] = useStore((state) => [state.setProjects, state.projects],shallow)
    const [modal, toggle] = useStore((state) => [state.modal,state.toggleModal])
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
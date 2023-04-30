import React, {useState} from "react";
import {CreateProjectForm, CreateProjectFormValues} from "../../../shared/model/FormTypes";
import {Button} from "reactstrap";
import {CreateProjectModal} from "./CreateProjectModal";
import {useStore} from "../../../shared/customHooks/useStore";
import {Project} from "../../../shared/model/ProjectModel";
import axios from "axios";
import {shallow} from "zustand/shallow";


interface Props {
    groupId?: string
}
export const CreateProjectPureComponent = ({groupId}:Props) => {

    const [setProjects, projects] = useStore((state) => [state.setProjects, state.projects],shallow)
    const [modal, toggle] = useStore((state) => [state.modal,state.toggleModal])
    const [selectedGroup, setSelectedGroup] = useState(groupId)
    const createProject = (data:CreateProjectFormValues) => {
        const newGroup:CreateProjectForm = {assignement: data}
        if(groupId){
            newGroup.group= groupId
        }
        axios.post<Project>("/project",newGroup).then((res)=>{
            setProjects([...projects, res.data])
        })
        toggle()
    }

    return <div>
        <CreateProjectModal createProject={createProject} modal={modal} toggle={toggle} selectedGroup={selectedGroup} setSelectedGroup={groupId ? undefined : setSelectedGroup} />
        <Button onClick={toggle}>Add Project</Button>
    </div>
}
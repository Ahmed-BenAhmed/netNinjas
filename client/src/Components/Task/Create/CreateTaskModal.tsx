import React, {useEffect, useMemo, useState} from "react";
import {
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader
} from "reactstrap";
import {useForm} from "react-hook-form";
import {CreateTaskFormValues} from "../../../shared/model/FormTypes";
import {TextInput} from "../../FormInput";
import {useStore} from "../../../shared/customHooks/useStore";

interface Props {
    createTask: (data:CreateTaskFormValues) => void,
    modal: boolean,
    toggle: () => void,
    selectedProject?: string | undefined
    setSelectedProject?: (selectedProject: string) => void
}


export const CreateTaskModal = ({createTask, modal, toggle, selectedProject, setSelectedProject}:Props) => {
    const {control,register, handleSubmit, reset} = useForm<CreateTaskFormValues>()
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const projects = useStore((state) => state.projects)
    const toggleDropDown = () => setDropdownOpen((prevState) => !prevState);

    useEffect(()=>{
        return reset
    },[modal])

    const currentProjectName = useMemo(()=>{
        return projects.find(project => project._id === selectedProject)?.assignement.title
    },[selectedProject])

    return  <Modal isOpen={modal} toggle={toggle}>
        <form onSubmit={handleSubmit(createTask)}>
            <ModalHeader toggle={toggle}>Add New Task Form</ModalHeader>
            <ModalBody>
                <TextInput name={"title"} control={control} placeholder={"task title"} /><br />
                <TextInput name={"description"} control={control} placeholder={"task description"} /><br />
                <TextInput name={"date"} control={control} type={"date"} /><br />
                <TextInput name={"time"} control={control} type={"time"} /> <br />

                <Dropdown toggle={toggleDropDown} isOpen={dropdownOpen}>
                    <DropdownToggle {...register("project")} disabled={!setSelectedProject}>
                        {selectedProject ? currentProjectName : "Select Project"}
                    </DropdownToggle>
                    {setSelectedProject &&
                        <DropdownMenu style={{height: "200px", overflowY: "scroll"}}>
                            {projects.map(project => (
                                <DropdownItem disabled={!setSelectedProject}
                                              onClick={() => setSelectedProject(project._id)}>
                                    {project.assignement.title}
                                </DropdownItem>))}
                        </DropdownMenu>
                    }
                </Dropdown>
            </ModalBody>
            <ModalFooter>
                <Button color={"primary"} type={"submit"}>
                    Add Task
                </Button>
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </form>
    </Modal>
}
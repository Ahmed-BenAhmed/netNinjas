import React from "react";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {useForm} from "react-hook-form";
import {CreateProjectFormValues} from "../../../shared/model/FormTypes";

interface Props {
    createProject: (data:CreateProjectFormValues) => void,
    modal: boolean,
    toggle: () => void
}

export const CreateProjectModal = ({createProject, modal, toggle}:Props) => {
    const {register, handleSubmit, reset} = useForm<CreateProjectFormValues>()

    return  <Modal isOpen={modal} toggle={toggle}>
        <form onSubmit={handleSubmit(createProject)}>
            <ModalHeader toggle={toggle}>Add New Project Form</ModalHeader>
            <ModalBody>

                    <input type={"text"} placeholder={"project name"} {...register("title")} />

            </ModalBody>
            <ModalFooter>
                <Button color={"primary"} type={"submit"}>
                    Add Project
                </Button>
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </form>
    </Modal>
}
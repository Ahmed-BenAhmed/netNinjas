import React, {useEffect} from "react";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {useForm} from "react-hook-form";
import {CreateGroupFormValues} from "../../../shared/model/FormTypes";

interface Props {
    createGroup: (data:CreateGroupFormValues) => void,
    modal: boolean,
    toggle: () => void
}

export const CreateGroupModal = ({createGroup, modal, toggle}:Props) => {
    const {register, handleSubmit, reset} = useForm<CreateGroupFormValues>()

    useEffect(()=>{
        return reset
    },[modal])

    return  <Modal isOpen={modal} toggle={toggle}>
        <form onSubmit={handleSubmit(createGroup)}>
            <ModalHeader toggle={toggle}>Add New Project Form</ModalHeader>
            <ModalBody>

                    <input type={"text"} placeholder={"group name"} {...register("groupName")} />

            </ModalBody>
            <ModalFooter>
                <Button color={"primary"} type={"submit"}>
                    Create Group
                </Button>
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </form>
    </Modal>
}
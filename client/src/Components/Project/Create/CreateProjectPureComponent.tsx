import React, {FormEventHandler, useState} from "react";
import {useAxios} from "../../../shared/customHooks/UseAxios";
import {useForm} from "react-hook-form";
import {CreateProjectFormValues} from "../../../shared/model/FormTypes";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {CreateProjectModal} from "./CreateProjectModal";




export const CreateProjectPureComponent = () => {
    const [modal, setModal] = useState<boolean>(false)
    const {sendData} = useAxios({
        method: "post",
        url: "/project"
    })
    const createProject = (data:CreateProjectFormValues) => {
        console.log("project",data)
        sendData({
            assignement: data
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
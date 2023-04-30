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
import {CreateProjectFormValues} from "../../../shared/model/FormTypes";
import {TextInput} from "../../FormInput";
import {useStore} from "../../../shared/customHooks/useStore";

interface Props {
    createProject: (data:CreateProjectFormValues) => void,
    modal: boolean,
    toggle: () => void,
    selectedGroup?: string | undefined
    setSelectedGroup?: (selectedGroup: string) => void
}

export const CreateProjectModal = ({createProject, modal, toggle, selectedGroup, setSelectedGroup}:Props) => {
    const {control, register, handleSubmit, reset} = useForm<CreateProjectFormValues>()
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const groups = useStore((state) => state.groups)
    const toggleDropDown = () => setDropdownOpen((prevState) => !prevState);

    useEffect(()=>{
        return reset
    },[modal])

    const currentGroupName = useMemo(()=>{
        return groups.find(group => group._id === selectedGroup)?.groupName
    },[selectedGroup])

    return  <Modal isOpen={modal} toggle={toggle}>
        <form onSubmit={handleSubmit(createProject)}>
            <ModalHeader toggle={toggle}>Add New Project Form</ModalHeader>
            <ModalBody>
                <TextInput name={"title"} control={control} placeholder={"project title"} /><br />
                <TextInput name={"description"} control={control} placeholder={"project description"} /><br />
                <TextInput name={"date"} control={control} type={"date"} /><br />
                <TextInput name={"time"} control={control} type={"time"} /> <br />

                <Dropdown toggle={toggleDropDown} isOpen={dropdownOpen}>
                    <DropdownToggle disabled={!setSelectedGroup}>
                        {selectedGroup ? currentGroupName : "Select Group"}
                    </DropdownToggle>
                    {setSelectedGroup &&
                        <DropdownMenu style={{height: "200px", overflowY: "scroll"}}>
                            {groups.map(group => (
                                <DropdownItem disabled={!setSelectedGroup}
                                              onClick={() => setSelectedGroup(group._id)}>
                                    {group.groupName}
                                </DropdownItem>))}
                        </DropdownMenu>
                    }
                </Dropdown>
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
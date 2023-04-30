import React, {useEffect, useState} from "react";
import {
    Button,
    Col,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Row
} from "reactstrap";
import {useForm} from "react-hook-form";
import {CreateGroupFormValues} from "../../../shared/model/FormTypes";
import {useAxios} from "../../../shared/customHooks/UseAxios";
import {User} from "../../../shared/model/UserModel";
import axios from "axios";
import {Group} from "../../../shared/model/GroupModel";
import {useStore} from "../../../shared/customHooks/useStore";
import {shallow} from "zustand/shallow";

interface Props {
    modal: boolean,
    toggle: () => void
}

export const CreateGroupModal = ({modal, toggle}:Props) => {
    const {control, register, handleSubmit, reset} = useForm<CreateGroupFormValues>()
    const {data:users, isLoading, error} = useAxios<User[]>({
        method: "get",
        url: "/users"
    })
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropDown = () => setDropdownOpen((prevState) => !prevState);
    const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined)
    const [groupMembers, setGroupMembers] = useState<User[]>([])
    const [groups, setGroups] = useStore((state) => [state.groups,state.setGroups],shallow)


    const currentUser = "641c6b60f7c360989eeb2cd3" // Todo
    const createGroup = (data:CreateGroupFormValues) => {
        const group = {
            ...data,
            members: groupMembers.map((groupMember) => groupMember._id),
            admin: currentUser
        }
        console.log("crate data.", group,"Date :" ,data)
        axios.post<Group>("/group", group).then((res)=>{
            setGroups([...groups, res.data])
            console.log("state changed", groups)
        })
        toggle()
    }
    useEffect(()=>{
        return reset
    },[modal])
    console.log("all users", users)
    if(isLoading){
        return <p>Loading...</p>
    }
    return  <Modal isOpen={modal} toggle={toggle}>
        <form onSubmit={handleSubmit(createGroup)}>
            <ModalHeader toggle={toggle}>Add New Group Form</ModalHeader>
            <ModalBody>
                <input type={"text"} placeholder={"group name"} {...register("groupName")} />
                <br/>
                {users &&
                    <Row>
                        <Col md={6}>
                            <Dropdown toggle={toggleDropDown} isOpen={dropdownOpen}>
                                <DropdownToggle>
                                    {selectedUser ? selectedUser.name : "Select User"}
                                </DropdownToggle>
                                <DropdownMenu style={{height: "200px", overflowY: "scroll"}}>
                                    {users.map(user => (
                                        <DropdownItem
                                                      onClick={() => setSelectedUser(user)}>
                                            {user.name}
                                        </DropdownItem>))}
                                </DropdownMenu>
                            </Dropdown>
                            <Button disabled={!selectedUser} onClick={()=>{
                                const isSelected = groupMembers.find((user) => user._id === selectedUser?._id)
                                if(selectedUser && !isSelected) {
                                    setGroupMembers([...groupMembers, selectedUser])
                                }
                            }}>Add User To Group</Button>
                        </Col>
                        <Col md={6}>
                            <p>Added Users</p>
                            <ul>
                                {groupMembers.map((user) => (
                                    <li>{user.name}</li>
                                    ))}
                            </ul>
                        </Col>
        </Row>
            }
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
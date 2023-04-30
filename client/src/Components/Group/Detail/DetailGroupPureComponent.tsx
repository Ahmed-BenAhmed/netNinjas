import React, {useEffect, useMemo, useState} from "react";
import {Group} from "../../../shared/model/GroupModel";
import {Button, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row} from "reactstrap";
import {CreateProjectPureComponent} from "../../Project/Create/CreateProjectPureComponent";
import {useStore} from "../../../shared/customHooks/useStore";
import axios from "axios";
import {Project} from "../../../shared/model/ProjectModel";
import {DetailProjectPureComponent} from "../../Project/Detail/DetailProjectPureComponent";
import {shallow} from "zustand/shallow";
import {User} from "../../../shared/model/UserModel";

interface Props {
    group: Group
}
export const DetailGroupPureComponent= ({group}:Props) => {
    const [projects,setProjects] = useStore(state => [state.projects, state.setProjects], shallow)
    const users = useStore(state => state.users)
    const [currentGroup, setCurrentGroup] = useState(group)
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropDown = () => setDropdownOpen((prevState) => !prevState);
    const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined)

    const addUserToGroup = () => {
        axios<Group>({
            method: "put",
            url: `/group`,
            data: {
                _id: group._id,
                members: [...group.members, selectedUser?._id]
            }
        }).then((res)=>{
            setCurrentGroup(res.data)
        })
    }
    useEffect(()=>{
        if(projects.length === 0){
            axios<Project[]>({
                method: "get",
                url: "/projects"
            }).then((res)=>{
                setProjects(res.data)
            })
        }
    },[])

    const groupAdmin = useMemo(()=>{
        return users.find(user => user._id === group.admin)
    },[])


    const [groupMembers,nonGroupMembers] = useMemo(()=>{
        const members:User[] = []
        const nonMembers:User[] = []
        users.forEach(user => {
            if(group.members.includes(user._id)){
                members.push(user)
            }else {
                nonMembers.push(user)
            }
        })
        return [members, nonMembers]
    },[currentGroup])


    return <Row>
        <Col md={9}>
            <h2>{group.groupName}</h2>
            <CreateProjectPureComponent groupId={group._id} />

            <h5>Projects</h5>
            {projects.filter(project => project.group === group._id).map(project => (
                <DetailProjectPureComponent project={project} />
            ))}
        </Col>
        <Col md={3}>
            <div className={"members-list"}>
                <h4>Team Leader</h4>
                {groupAdmin && <span>{groupAdmin.name}</span>}
                <h4>Team Members</h4>
                {groupMembers.map((member) => (<div>
                    {member.name}
                </div>))}


                <Dropdown toggle={toggleDropDown} isOpen={dropdownOpen}>
                    <DropdownToggle>
                        {selectedUser ? selectedUser.name : "Select User"}
                    </DropdownToggle>
                    <DropdownMenu style={{height: "200px", overflowY: "scroll"}}>
                        {nonGroupMembers.map(user => (
                            <DropdownItem
                                onClick={() => setSelectedUser(user)}>
                                {user.name}
                            </DropdownItem>))}
                    </DropdownMenu>
                </Dropdown>

                <Button disabled={!selectedUser} onClick={addUserToGroup}>Add New Member</Button>
            </div>
        </Col>
    </Row>
}
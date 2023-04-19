import React from "react";
import {CreateGroupFormValues} from "../../../shared/model/FormTypes";
import axios from "axios";
import {Group} from "../../../shared/model/GroupModel";
import {useStore} from "../../../shared/customHooks/useStore";
import {CreateGroupModal} from "./CreateGroupModal";
import {Button} from "reactstrap";

interface Props {
    modal: boolean
}
export const CreateGroupComponent = ({modal}:Props) => {

    const [groups, setGroups] = useStore(({groups,setGroups}) => [groups,setGroups])
    const [toggle] = useStore(({toggleModal}) => [toggleModal])
    const createGroup = (data:CreateGroupFormValues) => {
        console.log("crate data.", data)
        axios.post<Group>("/group", data).then((res)=>{
            setGroups([...groups, res.data])
        })
        toggle()
    }

    return<>
            <CreateGroupModal createGroup={createGroup} modal={modal} toggle={toggle} />
            <Button onClick={toggle}>
                Create Group
            </Button>
        </>
}
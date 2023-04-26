import React from "react";
import {useStore} from "../../../shared/customHooks/useStore";
import {CreateGroupModal} from "./CreateGroupModal";
import {Button} from "reactstrap";

interface Props {
    modal: boolean
}
export const CreateGroupComponent = ({modal}:Props) => {

    const [toggle] = useStore(({toggleModal}) => [toggleModal])


    return<>
            <CreateGroupModal modal={modal} toggle={toggle} />
            <Button onClick={toggle}>
                Create Group
            </Button>
        </>
}
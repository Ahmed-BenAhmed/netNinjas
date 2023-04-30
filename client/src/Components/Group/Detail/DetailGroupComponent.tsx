import React from "react";
import {DetailGroupPureComponent} from "./DetailGroupPureComponent";
import {useAxios} from "../../../shared/customHooks/UseAxios";
import {Group} from "../../../shared/model/GroupModel";
import {useParams} from "react-router-dom";


export const DetailGroupComponent = () => {
    const {groupId} = useParams()
    const {data:group, isLoading, error} = useAxios<Group>({
        url: `/group/${groupId}`,
        method: "get"
    })
    if(isLoading){
        return <h1>Loading...</h1>
    }
    if(error){
        return <h1>{error.message}</h1>
    }
    if(group) {
        return <DetailGroupPureComponent group={group}/>
    }
    return <h1>Some Error Occured</h1>
}
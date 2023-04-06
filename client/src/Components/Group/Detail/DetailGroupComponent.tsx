import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios"
import { DetailGroupPureComponent } from "./DetailGroupPureComponent";
import { Group } from "../../../shared/model/GroupModel";

type GetGroupResponse = {
    data: Group
}

export const DetailGroupComponent = () => {

    const [group, setgroup] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(undefined)

    let { groupId } = useParams();

    useEffect(() =>{
        setIsLoading(true)
        axios.get<GetGroupResponse>(`/group/${groupId}`).then((res)=>{
            setGroup(res.data)
        }).catch(err => {
            setError(err.message)
        }).finally(()=>{
            setIsLoading(false)
        })
    },[])

    if(isLoading) return <p>Loading ...</p>
    if(error) return <p>{error}</p>
    return <DetailGroupPureComponent group={group} />
}
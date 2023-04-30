import React from "react";
import dayjs from "dayjs";
import {Group} from "../../../shared/model/GroupModel";
import {Link} from "react-router-dom";

interface Props {
    group: Group
}
export const GroupCardComponent = ({group}:Props) => {
    return <div className="task-card">
        <div style={{display: "block", justifyContent: "space-between", flexDirection: "row-reverse"}}>
            <p className={"task-info"}>
                <span>{group.members.length + 1} | Created At: {dayjs(group.createdAt).format('DD/MM/YYYY')}</span>
            </p>
            <h6>{group.groupName}</h6>
            <p>{group.bio}</p>
            <p style={{textAlign: "right", fontSize: "10px"}}>
                <Link to={`/app/groups/group/${group._id}`}>
                    More info {">"}
                </Link>
            </p>
        </div>
    </div>
}
import React from "react";
import {Task} from "../../../shared/model/TaskModel";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"
import {OneLineTaskComponent} from "./OneLineTaskPureComponent";

dayjs.extend(relativeTime)

interface Props {
    task: Task
}

export const DetailTaskComponent = ({task}:Props)  => {
    return  <div className="task-card">
        <div style={{display: "block", justifyContent: "space-between", flexDirection: "row-reverse"}}>
        <p className={"task-info"}>
            {task.project && <span>{task.project.assignement?.title} | </span>}
            <span>{task.priority} |  {task.status} | </span>
            <span>{task.group ? task.group.groupName : "Personal"}</span>
            {task.dueDate && <>
                <span> | </span>
                <span>{dayjs(task.dueDate).fromNow()}</span>
            </>}
        </p>
        <OneLineTaskComponent task={task} withDetails={true} />
    </div>
    </div>
}
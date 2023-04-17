import React, {useState} from "react";
import {Project} from "../../../shared/model/ProjectModel";

interface Props {
    project: Project
}
export const DetailProjectPureComponent = ({project}:Props) => {
    const [currentProject, setCurrentProject] = useState<Project>(project)

    return  <div className="task-card">
        <div style={{justifyContent: "space-between", display: "flex"}}>
            {currentProject.tasks.map(task => (<div>
                <div className={"task-details"}>
                    <p className={"task-title"}>{task.title}</p><br />
                    <p className={"task-description"}>{task.description}</p>
                </div>
            </div>))}
        </div>
    </div>
}
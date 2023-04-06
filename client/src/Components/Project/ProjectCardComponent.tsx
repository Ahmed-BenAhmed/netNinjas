import React from "react";
import {Project} from "../../shared/model/ProjectModel";

interface Props {
    project: Project
}
export const ProjectCardComponent = ({project}:Props) => {
    return <div className="border">
        <h5 text-align="right">{project.group? project.group.groupName : ""} | duration: {project.duration}</h5>
        <div className="progress-container">
            <div className="progress-bar">
                <span data-width="80%"></span>
                <div className="yes">{project.progress}% done</div>
            </div>
        </div>
        <br/>
        {project.tasks.map((task)=> <div className={"task"}>
            <b>{task.title}</b><br/><small>tasks</small> <br/>
        </div>)}
        <b>Ceating task management web application for CE..</b><br/><small>tasks</small> <br/>
        <input type="checkbox" value="complete site design" />complete site design<br/>
        <input type="checkbox" value="use case diagram" />
        <del>use case diagram</del>
        <br/>
        <input type="checkbox" value="ERD diagram for our DB" />
        <del>ERD diagram for our DB</del>
        <br/>
    </div>

}
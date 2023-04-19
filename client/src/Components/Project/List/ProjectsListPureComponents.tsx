import React from "react";
import {CreateProjectPureComponent} from "../Create/CreateProjectPureComponent";
import {Project} from "../../../shared/model/ProjectModel";
import {DetailProjectPureComponent} from "../Detail/DetailProjectPureComponent";

interface Props {
    projects: Project[]
}
export const ProjectsListPureComponents = ({projects}:Props) => {

    console.log("projects ....", projects)

    return <div>
        <CreateProjectPureComponent />
        <h2>Projects</h2>
        {projects?.map(project => <DetailProjectPureComponent project={project} />)}
    </div>
}
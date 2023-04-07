import React from "react";
import {CreateProjectPureComponent} from "../Create/CreateProjectPureComponent";
import {Project} from "../../../shared/model/ProjectModel";
import {useStore} from "../../../shared/customHooks/useStore";

interface Props {
    projects: Project[]
}
export const ProjectsListPureComponents = () => {
    const projects = useStore((state)=> state.projects)

    console.log("projects ....", projects)

    return <div>
        <CreateProjectPureComponent />
        <h2>Projects</h2>
        {projects?.map(project => <p key={project._id}>
            {project.assignement?.title}
        </p>)}
    </div>
}
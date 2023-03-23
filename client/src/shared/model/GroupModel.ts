import {User} from "./UserModel";
import {Project} from "./ProjectModel";


export type Group = {
    groupName: string,
    bio: string,
    groupLeader: User,
    projects: [Project]
}
import {Group} from "./GroupModel";
import {Project} from "./ProjectModel";


export type User = {
    _id: string,
    name: string,
    userName: string,
    projects: [Project],
    xp: number,
    lvl: number,
    groups: [Group],
    pfp: string,
    bio: string,
    email: string,
    password: string
}
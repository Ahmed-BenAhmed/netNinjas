import {Group} from "./GroupModel";
import {PriorityEnum, Project} from "./ProjectModel";


export enum TaskStatusEnum {
    COMPLETED = "Completed",
    ACTIVE = "Active",
    ARCHIVED = "Archived",
    ON_HOLD = "On Hold",
    NOT_STARTED = "Not Started",
    CANCELLED = "Cancelled",
    DELETED = "Deleted"
}

export type Task = {
    title: string,
    description: string,
    status?: TaskStatusEnum,
    createdAt?: string,
    doDate?: string,
    dueDate?: string,
    priority?: PriorityEnum,
    group?: Group,
    duration?: string
    _id?: string
    project: Project
}



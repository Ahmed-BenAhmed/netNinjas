import { Group } from "./GroupModel";
import {PriorityEnum} from "./ProjectModel";


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
    status: TaskStatusEnum,
    createdAt: Date,
    doDate: Date,
    dueDate: Date,
    priority: PriorityEnum,
    group: Group,
    duration: string
    _id: string
}



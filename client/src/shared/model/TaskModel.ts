import {PriorityEnum} from "./ProjectModel";


export enum TaskStatusEnum {
    COMPLETED = "Completed",
    ACTIVE = "Active",
    ARCHIVED = "Archived",
    ON_HOLD = "On Hold",
    NOT_STARTED = "Not Started",
    CANCELLED = "Cancelled"
}

export type Task = {
    title: string,
    description: string,
    status: TaskStatusEnum,
    createdAt: Date,
    doDate: Date,
    dueDate: Date,
    priority: PriorityEnum
}



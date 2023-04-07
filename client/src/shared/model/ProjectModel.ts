import { Task } from "./TaskModel"
import {Group} from "./GroupModel";

export enum ProjectStatusEnum {
    COMPLETED = "Completed",
    ACTIVE = "Active",
    ARCHIVED = "Archived",
    ON_HOLD = "On Hold",
    NOT_STARTED = "Not Started",
    CANCELLED = "Cancelled"
}

export enum PriorityEnum {
    LOW = "Low",
    MEDIUM = "Medium",
    HIGH = "High",
    CRITICAL = "Critical"
}
export type Project = {
    assignement: Task
    completedTasks: number
    numberOfTask: number
    _id: string
}
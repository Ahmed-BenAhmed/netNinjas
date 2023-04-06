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
    name: string,
    duration: number,
    xpEarned: number,
    xpTotal: number,
    progress: number,
    createdDate: Date,
    Status: ProjectStatusEnum,
    tasks: [Task],
    priority: PriorityEnum,
    group?: Group
}
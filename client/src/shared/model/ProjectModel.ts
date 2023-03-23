import { Task } from "./TaskModel"

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
    createdDate: Date,
    Status: ProjectStatusEnum,
    tasks: [Task],
    priority: PriorityEnum
}
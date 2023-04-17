export type CreateProjectFormValues = {
    title: string;
};

export type CreateTaskFormValues = {
    title: string;
    description: string;
    dueDate: Date;
    date: string;
    time: string;
    project: string;
};

export type CreateGroupFormValues = {
    groupName: string;
};
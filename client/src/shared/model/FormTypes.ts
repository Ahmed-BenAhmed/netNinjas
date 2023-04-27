export type CreateProjectFormValues = {
    title: string;
};

export type CreateTaskFormValues = {
    title: string;
    description: string;
    dueDate: string;
    date: string;
    time: string;
    project: string;
};

export type CreateGroupFormValues = {
    groupName: string;
};

export type SignUpFormValues = {
    name: string,
    email: string,
    password: string
};
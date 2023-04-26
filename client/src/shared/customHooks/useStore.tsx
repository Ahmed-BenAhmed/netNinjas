import {create} from "zustand";
import {Project} from "../model/ProjectModel";
import {Task} from "../model/TaskModel";
import {Group} from "../model/GroupModel";

interface NetNinjaState {
    modal: boolean
    toggleModal: () => void
    projects: Project[]
    setProjects: (projects: Project[]) => void
    tasks: Task[]
    setTasks: (tasks: Task[]) => void
    groups: Group[]
    setGroups: (group: Group[]) => void
    tasksCounter: number
    deletT: (taskId: string) => void

    updateTask: (task: Task) => void
}


export const useStore = create<NetNinjaState>()((set) => ({
    modal: false,
    toggleModal: () => set((state)=> ({modal: !state.modal})),
    projects: [],
    setProjects: (projects1) => set(() => ({ projects: projects1})),
    tasks: [],
    tasksCounter: 0,
    setTasks: (tasks) => set((state)=>  ({tasks: tasks})),
    groups: [],
    setGroups: (groups1) => set(()=> ({groups: groups1})),
    updateTask: (task) => set((state)=> {
        return {
            tasks: [...state.tasks, task]
        }
    }),
    deletT: (taskId) => set((state)=> ({tasks: state.tasks}))
}))
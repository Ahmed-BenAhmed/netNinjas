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
}


export const useStore = create<NetNinjaState>()((set) => ({
    modal: false,
    toggleModal: () => set((state)=> ({modal: !state.modal})),
    projects: [],
    setProjects: (projects) => set(() => ({ projects: projects})),
    tasks: [],
    tasksCounter: 0,
    setTasks: (tasks) => {
        return set(()=> {
            return {
                tasks: tasks
            }
        })
    },
    groups: [],
    setGroups: (groups) => set(()=> ({groups: groups}))
}))
import {create} from "zustand";
import {Project} from "../model/ProjectModel";

interface NetNinjaState {
    projects: Project[]
    setProjects: (projects: Project[]) => void
}

export const useStore = create<NetNinjaState>()((set) => ({
    projects: [],
    setProjects: (projects) => set((state:NetNinjaState) => ({ projects: projects})),
}))
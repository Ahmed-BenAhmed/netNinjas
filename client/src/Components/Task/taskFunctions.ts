import {CreateTaskFormValues} from "../../shared/model/FormTypes";
import axios from "axios";
import {Task} from "../../shared/model/TaskModel";

export const postTask = (task:CreateTaskFormValues, tasks: Task[], setTasks: (tasks:Task[]) => void) => {
    axios.post<Task>("/task", task).then((res)=>{
        console.log("task created", res.data)
        setTasks([...tasks, res.data])
    })
}
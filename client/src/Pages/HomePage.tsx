import React, {useEffect} from "react";
import {Button} from "reactstrap";
import {useStore} from "../shared/customHooks/useStore";
import {Task} from "../shared/model/TaskModel";
import {useAxios} from "../shared/customHooks/UseAxios";
import {CreateTaskComponent} from "../Components/Task/Create/CreateTaskComponent";
import {DetailTaskComponent} from "../Components/Task/Detail/DetailTaskComponent";


export const HomePage = () => {
    const setTasks = useStore((state)=> state.setTasks)
    const {data:tasks, isLoading, error} = useAxios<Task[]>({
        method: "get",
        url: "/tasks"
    })
    const [modal, toggle] = useStore(({modal,toggleModal}) => [modal,toggleModal])

    useEffect(()=>{
        if(tasks){
            setTasks(tasks)
        }
    },[isLoading])
    if(isLoading){
        return <h1>Loaddinng</h1>
    }
    if(error){
        return <h1>{error.message}</h1>
    }
    return <div>
        <CreateTaskComponent modal={modal} />
        <Button onClick={toggle}>
            Add Task
        </Button>
        {tasks?.map(task => <DetailTaskComponent task={task} />)}
    </div>
}
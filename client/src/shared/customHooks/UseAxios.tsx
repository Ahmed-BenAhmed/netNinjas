import axios, {AxiosError, AxiosHeaders, AxiosRequestConfig, AxiosResponse} from "axios"
import {useEffect, useState} from "react";
import {Task} from "../model/TaskModel";
import {useParams} from "react-router-dom";
import {AxiosInstance} from "../AxiosInstance";
import {setEnvironmentData} from "worker_threads";

axios.defaults.baseURL = 'http://localhost:4000';

export function useAxios<Type>(axiosParams: AxiosRequestConfig){
    const [data, setData] = useState<Type>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<AxiosError>()

    const fetchData = (axiosParams: AxiosRequestConfig) => {
        setIsLoading(true)
        axios.request<Type>(axiosParams).then((res:any)=>{
            setData(res.data)
        }).catch((err:any) => {
            setError(err.message)
        }).finally(()=>{
            setIsLoading(false)
        })
    }

    const sendData = (data:any) => {
        fetchData({...axiosParams, data: data})
    }
    useEffect(() =>{
        if(axiosParams.method === "GET" || axiosParams.method === "get"){
            fetchData(axiosParams)
        }
    },[])

    return {data, isLoading, error, sendData}
}
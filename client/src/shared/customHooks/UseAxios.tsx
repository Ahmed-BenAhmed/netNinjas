import axios, {AxiosError, AxiosRequestConfig} from "axios"
import {useEffect, useState} from "react";

axios.defaults.baseURL = process.env.API_URL || 'http://localhost:5001/';


export function useAxios<Type>(axiosParams: AxiosRequestConfig){
    const [data, setData] = useState<Type>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<AxiosError>()

    const fetchData = (axiosParams: AxiosRequestConfig):Type|undefined => {
        setIsLoading(true)
        axios.request<Type>(axiosParams).then((res:any)=>{
            setData(res.data)
            setIsLoading(false)
            return res.data
        }).catch((err:any) => {
            setError(err.message)
        }).finally(()=>{
            setIsLoading(false)
        })
        return data
    }

    const sendData = (data:any):Type|undefined  => {
        return fetchData({...axiosParams, data: data})
    }
    useEffect(() =>{
        if(axiosParams.method === "GET" || axiosParams.method === "get"){
            fetchData(axiosParams)
        }
    },[])

    return {data, isLoading, error, sendData}
}
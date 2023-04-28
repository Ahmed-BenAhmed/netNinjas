import React, {useState} from "react";
import axios from 'axios';
import {useNavigate} from "@reach/router";
import {LogInFormValues} from "../../shared/model/FormTypes";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";


export const LogInForm = () => {
    const {register, handleSubmit} = useForm<LogInFormValues>();

    const [errors, setErrors] = useState(undefined)

    const navigate= useNavigate();
    const login = async (data:LogInFormValues) => {
        const url="/login"
        axios.post<string>(url,data).then((res)=>{
            localStorage.setItem("token",res.data)
        }).catch((err)=>{
            setErrors(err)
        })
        navigate("/app");
    }
    return (
        <div className="LogInForm_container">
            <form className= "form_container" onSubmit={handleSubmit(login)}>
              <h1>Welcome back</h1>
                 <input
               type="text"
               placeholder="Email" 
               className="input"
               /> 
                <input
               type="password"
               placeholder="Password" 
               className="input"
               />
               {errors && <div className='errorMessage'>{errors}</div>}
               <button type="submit" className="S_button">
                Sign in
               </button>
               <Link to="/auth/sign-up">
                <button>
                    Sign up
                </button>
               </Link>
           </form>   
        </div>
    )
}
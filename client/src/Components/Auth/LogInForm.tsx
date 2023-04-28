import React, {useState} from "react";
import axios from 'axios';
import {useNavigate} from "@reach/router";
import {LogInFormValues} from "../../shared/model/FormTypes";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";


type errorType = {
    email: string
    password: string
}

export const LogInForm = () => {
    const {register, handleSubmit} = useForm<LogInFormValues>();

    const [errors, setErrors] = useState<errorType>()

    const navigate= useNavigate();
    const login = async (data:LogInFormValues) => {
        const url="/login"
        axios.post<string>(url,data).then((res)=>{
            localStorage.setItem("token",res.data)
            navigate("/app");
        }).catch((err)=>{
            setErrors(err.response.data.errors)
        })
    }
    return (
        <div className="LogInForm_container">
            <form className= "form_container" onSubmit={handleSubmit(login)}>
              <h1>Welcome back</h1>
                 <input
               type="text"
               placeholder="Email" 
               {...register("email")}
               required
               className="input"
               />
                {errors?.email && <div className='errorMessage'>{errors?.email}</div>}
                <input
                   type="password"
                   placeholder="Password"
                   {...register("password")}
                   required
                   className="input"
               />
               {errors?.password && <div className='errorMessage'>{errors?.password}</div>}
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
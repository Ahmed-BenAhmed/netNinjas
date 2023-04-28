import React, {useState} from "react";
import axios from 'axios';
import {useNavigate} from "@reach/router";
import {SignUpFormValues} from "../../shared/model/FormTypes";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";


export const SingUpForm = () => {
    const {register, handleSubmit} = useForm<SignUpFormValues>();

    const [errors, setErrors] = useState(undefined)

    const navigate= useNavigate();
    const signUp = async (data:SignUpFormValues) => {
        const url="/signup"
        axios.post<string>(url,data).then((res)=>{
            localStorage.setItem("token",res.data)
        }).catch((err)=>{
            setErrors(err.response.data.errors)
        })
        navigate("/auth/login")
    }
    return (
        <div className="SignUpForm_container">
            <form className= "form_container" onSubmit={handleSubmit(signUp)}>
              <h1>Create Account</h1>
              <input
               type="text"
               placeholder="Name"
               {...register("name")}
               required
               className="input"
               />
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
                Sign Up
               </button>
               <Link to="/auth/login">
                <button>
                    Sign in
                </button>
               </Link>
           </form>   
        </div>
    )
}
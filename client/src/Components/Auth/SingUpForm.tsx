import React, {useState} from "react";
import axios from 'axios';
import {useNavigate} from "@reach/router";
import {SignUpFormValues} from "../../shared/model/FormTypes";
import { Link } from "react-router-dom";


export const SingUpForm = () => {
    const [data,setData]= useState<SignUpFormValues>({
        name : "",
        email:"",
        password: ""
    });
    const [error, setError]= useState('');
    const navigate= useNavigate();
    const handleChange = ({currentTarget: input}) => {
        setData({...data,[input.name]: input.value});
    };
    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const url="signup"
            const {data: res} = await axios.post(url,data);
            await navigate("/auth/login");
            console.log(res.message);
        }catch(error){
            if(error.response && error.response.status >=400 && error.response.status <= 500 ){
                setError(error.response.data.message)
            }
        }
        
    }
    return (
        <div className="SignUpForm_container">
            <form className= "form_container" onSubmit={handleSubmit}>
              <h1>Create Account</h1>
              <input
               type="text"
               placeholder="Name" 
               name="name"
               onChange={handleChange}
               value={data.name}
               required
               className="input"
               />
                 <input
               type="text"
               placeholder="Email" 
               name="email"
               onChange={handleChange}
               value={data.email}
               required
               className="input"
               /> 
                <input
               type="text"
               placeholder="Password" 
               name="password"
               onChange={handleChange}
               value={data.password}
               required
               className="input"
               />
               {error && <div className='errorMessage'>{error}</div>}
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
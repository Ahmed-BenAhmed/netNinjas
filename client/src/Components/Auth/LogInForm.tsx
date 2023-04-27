import React, {useState} from "react";
import axios from 'axios';
import {LogInFormValues} from "../../shared/model/FormTypes";


export const LogInForm = () => {
    const [data,setData]= useState<LogInFormValues>({  
        email:"",
        password: ""
    });
    const [error, setError]= useState('');
    const handleChange = ({currentTarget: input}) => {
        setData({...data,[input.name]: input.value});
    };
    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const url="/login"
            const {data: res} = await axios.post(url,data);
            localStorage.setItem("token",res.data);
            window.location ="/"
            console.log(res.message);
        }catch(error){
            if(error.response && error.response.status >=400 && error.response.status <= 500 ){
                setError(error.response.data.message)
            }
        }
        
    }
    return (
        <div className="LogInForm_container">
            <form className= "form_container" onSubmit={handleSubmit}>
              <h1>Welcome back</h1>
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
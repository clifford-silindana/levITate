import React from 'react';
import { Link } from 'react-router-dom';
import LoginImage from "../assets/images/login-image.jpg";
import LevitateLogo from "../assets/images/levitate-logo-2.png";
import awslogo from "../assets/images/aws.png";

const Login = () => {
  return (

    <div className = {`
        fixed
        top-0
        left-0
        w-full
        h-full
        bg-bodyBackgroundColor
      
    `}>
    <div className = {`
        laptop:flex
        desktop:flex
        wideScreen:flex
        h-full
    `}>

        <div className = {`
            w-1/2
            h-full
            bg-slate-600
            `}>
                <img 
                className = {`
                    w-full
                    h-full
                    object-cover
                    `}
                src= {LoginImage} alt="" />
            

        </div>

        <div className = {`
        w-1/2
        h-full
        flex-col
        justify-center
        place-content-evenly
        `}>
                <img className = {`
                w-1/2
                align-center
                mx-auto
        
                `}
                src= {LevitateLogo} alt="" />
            
            <div className = {`
                w-1/2
                h-1/2
                my-5
                mx-auto
                `}>

            <input className = {`w-full h-12 bg-bodyBackgroundColor p-7 my-5 text-white text-center`}type="text" placeholder = "email address"/>
            <input className = {`w-full h-12 bg-bodyBackgroundColor p-7 my-5 text-white text-center`}type="password" placeholder = "password" />

            <Link className = {`
            bg-blue-900
            px-7 
            py-3
            hover:bg-white
            group
            `}
            
            to = "/home">
            <button className = {`w-1/3 my-5 mx-auto text-white group-hover:text-blue-900`}type = "submit">
                 <h1>Log in</h1>
            </button>
            </Link>

            </div>

        </div>

  
      
        
    </div>

  
    </div>
  )
}

export default Login
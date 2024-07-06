import React from 'react';
import { Link } from 'react-router-dom';
import levitatelogo from "../assets/images/levitate-logo-2.png";

const OuterNavigation = () => {
  return (
    <div className = {`
        fixed
        top-0
        left-0
        w-full
        h-desktopNavigationHeight
        z-10
        `}>
            <div className = {`
                flex
                w-full
                h-full
                justify-between
                items-center
                px-10
               
                `}>
                    <img className = {`w-desktopLogoSize h-full object-cover`} src= {levitatelogo} alt="" />

                    <Link className = {`px-7 py-3 border border-white hover:scale-105 group`} to = "/login">
                    <h1 className = {`
                        text-white
                        group-hover:scale-105
                    
            
                        `}>Log in</h1>
                    </Link>

            </div>
        </div>
  )
}

export default OuterNavigation
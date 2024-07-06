import React from 'react';
import { Link } from "react-router-dom";

const SideNavigation = (props) => {
    const courseID = props.courseID;

  return (
    <div className = "w-full p-5 mx-5 my-5 sticky top-72 flex flex-col items-center">

        <Link className = "px-7 py-3 border border-white hover:scale-105 group" to = {`/new-ticket/`}>
            <h1 className = {`text-white
                        group-hover:scale-105`}>All tickets</h1>
        </Link>

        <Link className = "px-7 py-3 border border-white hover:scale-105 group" to = {`/new-ticket/`}>
            <h1 className = {`text-white
                        group-hover:scale-105`}>New ticket</h1>
        </Link>

        <Link className = "px-7 py-3 border border-white hover:scale-105 group" to = {`videos/`}>
            <h1 className = {`text-white
                        group-hover:scale-105`}>Logout</h1>
        </Link>

        
    </div>
  )
}

export default SideNavigation
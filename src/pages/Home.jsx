import React, { useState } from 'react';
import {Outlet, useParams} from "react-router-dom";
import SideNavigation from '../components/SideNavigation';
import InnerNavigation from "../components/InnerNavigation";

const Home = () => {
  return (
    <div>
        <InnerNavigation/>
        <div className = "flex justify-between mx-auto">
                {/* <div className = "w-1/5">
                <SideNavigation/>
                </div> */}
                <div className = "w-full mt-8 mx-auto">
                <Outlet/>
                </div>

                
              
            </div>

    </div>
  )
}

export default Home
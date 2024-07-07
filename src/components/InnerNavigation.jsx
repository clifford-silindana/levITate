import React, { useRef, useEffect, useState }from 'react';
import { Link } from 'react-router-dom';

//component import
import NavigationItem from "../components/NavigationItem";

//image import
import levitatelogo from "../assets/images/levitate-logo-2.png";
import profilepicture from "../assets/images/profile-picture.jpg";

//icon import
import hamburgermenu from "../assets/icons/hamburgermenu.png";

const InnerNavigation = () => {
    const navRef = useRef(null);
    const [navHeight, setNavHeight] = useState(0);

    useEffect(() => {
        if (navRef.current) {
        setNavHeight(navRef.current.clientHeight);
        }
    }, []);

    // console.log(navHeight);

    const [active, setActive] = useState("nav__menu"); 

    const navToggle = () => {
      active === "nav__menu" 
      ? 
      setActive("nav__menu nav__active") 
      : 
      setActive("nav__menu");
      //alert("Menu clicked");
      console.log(active);
  
    }

  

  return (
    <div
    ref={navRef} 
    className = {`
    bg-bodyBackgroundColor
    w-navigationWidth 
    mobile:h-mobileNavigationHeight
    mobile:px-mobileNavigationXPadding
    tablet:h-tabletNavigationHeight
    tablet:px-tabletNavigationXPadding
    desktop:h-tabletNavigationHeight 
    desktop:px-desktopNavigationXPadding
    wideScreen:h-tabletNavigationHeight 
    wideScreen:px-wideScreenNavigationXPadding
    fixed top-0 left-0
    padding-10 
    flex justify-between items-center
    z-100`}>
      <Link to = {``}>
        <img className = {`mobile:w-mobileLogoSize
        tablet:w-tabletLogoSize
        desktop:w-desktopLogoSize
        wideScreen:w-wideScreenLogoSize`} 
        src={levitatelogo}  alt="" />
        </Link>

        {/* <h1 className = "text-white">Navigation height is {navHeight}</h1> */}

        <div className = "flex justify-between items-center">
        <div id = {active} className={`${active ? 'nav__menu nav__active' : 'nav__menu'} flex justify-between mr-10`}>
        {/* <NavigationItem to = "certify/" navigationText = "CERTIFY" icon = {hamburgermenu} />
        <NavigationItem to = "data-daily/" navigationText = "DATA DAILY" icon = {levitatelogo} /> */}
          <Link className = "px-7 py-3 mr-5 border border-white hover:scale-105 group" to = {``}>
            <h1 className = {`text-white
                        group-hover:scale-105`}>All tickets</h1>
        </Link>

        <Link className = "px-7 py-3 mr-5 border border-white hover:scale-105 group" to = {`new-ticket`}>
            <h1 className = {`text-white
                        group-hover:scale-105`}>New ticket</h1>
        </Link>

        <Link className = "px-7 py-3 mr-5 border border-white hover:scale-105 group" to = {`/`}>
            <h1 className = {`text-white
                        group-hover:scale-105`}>Logout</h1>
        </Link>
        </div>

<Link to = {`profile/`}>

<div className = "w-24 h-24 rounded-full overflow-hidden bg-gray-800 text-white  flex items-center justify-center mr-10">
    <img src= {profilepicture} className = "w-full h-full object-cover rounded-full" alt="" />
</div>

</Link>
        <img className = {`
        ${active ? 'nav__menu nav__active' : 'nav__menu'}
        nav__toggler
        w-hamburgerMenuWidth
        tablet:hidden
        desktop:hidden
        wideScreen:hidden`} 
        src= {hamburgermenu} 
        alt=""
        onClick = {navToggle} />
        </div>

        

    </div>
    
  )
}

export default InnerNavigation
import React from 'react';
import { Link } from 'react-router-dom';


const NavigationItem = (props) => {
  return (
    <Link to = {props.to}
    className = {`group 
    px-mobileNavigationItemHorizontalPadding 
    py-mobileNavigationItemVerticalPadding 
    mx-mobileNavigationItemHorizontalMargin
    my-mobileNavigationItemVerticalMargin 
    borderColor border-borderWidth border-solid 
    hover:border-borderColorHover 
    text-navigationItemFontColor 
    text-mobileNavigationMinFontSize
    bg-navigationItemBackgroundColor
    hover:bg-navigationItemBackgroundHoverColor 
    hover:text-navigationItemFontHover
    hidden tablet:flex desktop:flex wideScreen:flex 
    items-center justify-start
    transition duration-300 ease-in-out delay-300
    active:bg-slate-600`}>
           <div className="group-hover:bg-navigationItemBackgroundHoverColor transition duration-300 ease-in-out delay-300 flex items-center">
                <img src={props.icon} alt="" className="w-mobileNavigationIconWidth group-hover:bg-black transition duration-300 ease-in-out delay-300" />
                <h1 className="font-navigationFontFamily font-navigationFontWeight text-navigationItemFontColor group-hover:text-navigationItemFontHover mx-2 transition duration-300 ease-in-out delay-300">{props.navigationText}</h1>
            </div>
    </Link>
        
  )
}

export default NavigationItem;
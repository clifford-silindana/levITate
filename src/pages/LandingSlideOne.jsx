import React from 'react';
import landingvideo from "../assets/videos/landing-page-video.mp4";

const LandingSlideOne = () => {
  return (
    <div className = {`
        w-full
        max-h-screen
        bg-bodyBackgroundColor
        flex
    `}>
        <div className = {`
            w-1/2
            h-full
            mt-desktopNavigationMarginBottom
            `}>
                <h1 className = {`text-stroke-1 text-desktopHeaderFontSize`}>Remote</h1>
                <h1 className = {`text-stroke-2 text-desktopHeaderFontSize`}>IT</h1>
                <h1 className = {`text-stroke-3 text-desktopHeaderFontSize`}>&</h1>
                <h1 className = {`text-stroke-4 text-desktopHeaderFontSize`}>Cloud Services</h1>

        </div>

        <div className = {`
            w-1/2
            h-full
            `}>
                <video className = {`w-full h-full object-contain`} autoPlay muted loop src = {landingvideo} type="video/mp4"/>

        </div>
    </div>
  )
}

export default LandingSlideOne
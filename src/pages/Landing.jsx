import React from 'react';
import OuterNavigation from '@/components/OuterNavigation';
import LandingSlideOne from './LandingSlideOne';

const Landing = () => {
  return (
    <div className = {`
        fixed
        top-0
        left-0
        w-full
        h-full
      
    `}>
        <OuterNavigation />
        <LandingSlideOne />
    </div>
  )
}

export default Landing
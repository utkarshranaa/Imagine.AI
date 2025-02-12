import React from 'react'
import Hero from './Hero/Hero'
import RecentImage from './RecentImage/RecentImage';

const  Home = () => {
  return (
    <div className= "overflow-hidden h-[2000px]">
      <Hero />
      <RecentImage />
      </div>
  );
};

export default  Home
import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Education from './Education';
import Pricing from './Pricing';
import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';

function HomePage() {
    return ( 
       <>
        
       <Hero></Hero>
       <Awards></Awards>
       <Stats></Stats>
       <Pricing></Pricing>
       <Education></Education>
       <OpenAccount></OpenAccount>
         
       
       </>
     );
}

export default HomePage ;
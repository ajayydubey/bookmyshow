// <--------------------NAVBAR LAYOUT------------------------->

import React from "react";

//Components
import Navbar from "../components/Navbar/navbar.component";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.component";  


 

const DefaultLayout = (props) => 
{
    return (
        <>
        <h1 className="text-xl"> Default Layout </h1>
        <Navbar />
        <HeroCarousel/>
         {props.children}   
        </>
    );
};

export default DefaultLayout;
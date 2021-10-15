import React from "react";
import HeroSlider from "react-slick";

//Component
import { NextArrow , PrevArrow } from "./Arrows.component";




 

const HeroCarousel = () => {
    const settingsLG = {
        arrows:true, 
        autoplay:true, 
        centerMode:true, 
        dots: true,
        centerpadding:"300px",
        slidesToShow:1,
        infinite:true,
        slidesToScroll:1,
        nextArrow : <NextArrow />,
        prevArrow : <PrevArrow />,

    };

    const settings = {
        arrows:true,
        centerMode:true,
        centerpadding:"200px", 
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow : <NextArrow />,
        prevArrow : <PrevArrow />,
    };

    const images = [
        "https://images.unsplash.com/photo-1626544001336-f24742de4221?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        "https://images.unsplash.com/photo-1626462054828-5334570b899f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        "https://images.unsplash.com/photo-1626431148854-ccc91008479f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
        "https://images.unsplash.com/photo-1626386120725-345aed4f402c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        
];
    
    
    
    return (

        <>

        <div className="lg:hidden">
        <HeroSlider {...settings}>
            {
                images.map( (image) => 
                (
                    <div className="w-full h-56 md:h-80 py-3 px-1">
                        <img src={image} alt="testing" className="w-full h-full rounded-md" />
                    </div>
                ))
            }

        </HeroSlider>
        </div>

        <div className="hidden lg:block">
        <HeroSlider {...settingsLG}>
            {
                images.map( (image) => 
                (
                    <div className="w-full h-96 px-2 py-3">
                        <img src={image} alt="testing" className="w-full h-full rounded-md" />
                    </div>
                ))
            }

        </HeroSlider>
        </div>
       
         </>
    );


};

export default HeroCarousel;


import React from "react";
import Productos from "../Components/Productos";
import CarouselComponent from "../Components/Carousel";


function Home(){

        return(
                <div>
                    <CarouselComponent/>    
                    <Productos/>
                </div>
        )
    
}

export default Home
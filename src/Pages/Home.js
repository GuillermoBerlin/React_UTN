import React from "react";
import Productos from "../Components/Productos";
import CarouselComponent from "../Components/Carousel";
import ProductsByCategory from "../Components/ProductsByCategory"

function Home(){

        return(
                <div>
                    <CarouselComponent/>    
                    <ProductsByCategory/>
                </div>
        )
    
}

export default Home
import { Carousel } from 'react-bootstrap';


function CarouselDetalle(props){

    const {thumbnail,thumbnail2} = props

    return(
         
            <Carousel className="d-sm-block d-md-none d-lg-none">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={thumbnail}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={thumbnail2}
                    alt="Second slide"
                            />
                </Carousel.Item>
            </Carousel>                
    )
}
 
export default CarouselDetalle
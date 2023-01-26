import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';




function CarouselComponent() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} style={{marginBottom:"80px"}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="//i.ibb.co/HBCdFWg/pexels-photo-1643383.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h2>Hola bebe</h2>
          <p className="lead">Nulla vitae elit libero.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="//i.ibb.co/MS13CsB/pexels-photo-1457842-1.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h2>Te amo</h2>
          <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="//i.ibb.co/5x0rqLX/pexels-photo-6527033-1.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h2>Mi amor</h2>
          <p className="lead">Special creature from the forest</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent 
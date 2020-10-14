import React from 'react';
import carouselOne from '../../../images/carouselOne.png';
import carouselTwo from '../../../images/carouselTwo.png';
import carouselThree from '../../../images/carouselThree.png';
import './WorkingItems.css';
import { Carousel } from 'react-bootstrap';

const WorkingItems = () => {
    
    return (
        <section className="working-section">
            <div className="pb-5 pt-3">
                <h1 className="text-center text-white">Here are some of <span style={{color:'#7AB259'}}>our works</span></h1>
            </div>
          
            <Carousel className="container">
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100 image-height"
      src={carouselOne}
      alt="First slide"
    />
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img 
      className="d-block w-100 image-height"
      src={carouselTwo}
      alt="Third slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 image-height"
      src={carouselThree}
      alt="Third slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </section>
    );
};

export default WorkingItems;
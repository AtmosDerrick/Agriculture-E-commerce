import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

function CarouselImage() {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <div className="h-1/2">
            <img
              className="d-block w-full "
              src="./image/buy.jpg"
              alt="First slide"
            />
          </div>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <div className="h-1/2">
            <img
              className="d-block w-full "
              src="./image/sell.jpg"
              alt="Second slide"
            />
          </div>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="h-1/2">
            {" "}
            <img
              className="d-block w-full "
              src="./image/learn.jpg"
              alt="Third slide"
            />
          </div>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselImage;

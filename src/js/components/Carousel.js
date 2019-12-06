import React, { Component } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

export default class Carousel extends Component {
      render() {
    return (
        <div>
            <CarouselProvider
            totalSlides={3}
            >
            <Slider>
            <Slide index={0}>I am the first Slide.</Slide>
            <Slide index={1}>I am the second Slide.</Slide>
            <Slide index={2}>I am the third Slide.</Slide>
            </Slider>
        </CarouselProvider>
      </div>
    );
  }
}


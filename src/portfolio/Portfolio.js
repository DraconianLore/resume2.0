import React, { Component } from 'react';
import Slider from "react-slick";
import Koios from './projects/Koios';
import Conligo from './projects/Conligo';
import Chatty from './projects/Chatty';
import Jungle from './projects/Jungle';
import Tweeter from './projects/Tweeter';
import Current from './projects/Current';

export default class Portfolio extends Component {

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="container">
        <Slider {...settings}>
          <Koios />
          <Jungle />
          <Chatty />
          <Conligo />
          <Tweeter />
          <Current />
        </Slider>
      </div>
    );
  }
}
import React, { Component } from 'react';
import Slider from "react-slick";
import Koios from './projects/Koios';
import Conligo from './projects/Conligo';
import Chatty from './projects/Chatty';
import Jungle from './projects/Jungle';
import Tweeter from './projects/Tweeter';
import Current from './projects/Current';
import DonateIT from './projects/DonateIT';
import QuoteChat from './projects/QuoteChat';
import DmPlayerTracker from './projects/DmPlayerTracker';
import GameMatch from './projects/GameMatch';

export default class Portfolio extends Component {


  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: this.props.portfolioItem
    };
    return (
      <div className='container' >
        <Slider {...settings}>
          <GameMatch />
          <DmPlayerTracker />
          <QuoteChat />
          <DonateIT />
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

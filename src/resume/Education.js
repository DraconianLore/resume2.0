import React, { Component } from 'react';

export default class Education extends Component {

  render() {
    return (
      <div className='section wider'>
        <h1 className='heading'>Relevant Education</h1>
        <hr className='exp-hr' />

        <h4 className='sub-heading'>Diploma in Web Development<span className="right-side">May 2019 - August 2019</span></h4>
        <h4 className='sub-sub-heading'>Lighthouse Labs<span className="right-side">Vancouver, Canada</span></h4>
        <p className='res-description'>
          A full-time immersive full-stack web development program covering topics such as Javascript, jQuery, HTML, CSS, SASS, 
          MongoDB, PostgreSQL, React, NodeJs, Ruby, and Ruby on Rails.
          </p>
        <ul className='res-description'>
          <h4 className='sub-sub-heading mini-heading'>Projects</h4>
          {/* eslint-disable-next-line */}
          <a href='#' alt='View portfolio'>
          <li onClick={() =>this.props.showPortfolio(3)}><strong>Κοῖος</strong> - <em>An immersive mobile game made with React native and Ruby-on-Rails</em></li>
          <li onClick={() =>this.props.showPortfolio(4)}><strong>Jungle</strong> - <em>An eCommerce application made with Ruby-on-Rails</em></li>
          <li onClick={() =>this.props.showPortfolio(5)}><strong>ChattyApp</strong> - <em>An anonymous chatroom made with React and NodeJs</em></li>
          <li onClick={() =>this.props.showPortfolio(6)}><strong>Conligo</strong> - <em>A 'smart' todo list made with NodeJs and Express</em></li>
          <li onClick={() =>this.props.showPortfolio(7)}><strong>Tweeter</strong> - <em>A twitter clone SPA made with NodeJs and Express</em></li>
          </a>
        </ul>
        <p>
          <em>
            This course allowed me to change my programming hobby into a career. For 12 hours a day, 6 days a week I was fully immersed in absorbing knowledge through hands on exercises and project work.
            </em>
        </p>
      </div>
    )
  }
}
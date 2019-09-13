import React, { Component } from 'react';

export default class Education extends Component {

  render() {
    return (
      <div className='section wider'>
        <h1 className='heading'>Relevant Education</h1>
        <h4 className='sub-heading'>Diploma in Web Development<span className="right-side">May 2019 - August 2019</span></h4>
        <h4 className='sub-sub-heading'>Lighthouse Labs<span className="right-side">Vancouver, Canada</span></h4>
        <p className='res-description'>
          A full-time immersive full-stack web development program covering topics such as
          </p>
          <ul className='res-description'>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>SASS</li>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Ruby</li>
            <li>Ruby on Rails</li>
          </ul>
          <p>
          <em>
            This course allowed me to change my programming hobby into a qualification. For 12 hours a day, 6 days a week I was fully immersed in absorbing knowledge through hands on exercises and project work.
            </em>
        </p>
      </div>
    )
  }
}
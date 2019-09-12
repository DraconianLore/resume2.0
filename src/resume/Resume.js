import React, { Component } from 'react';
import Contact from './Contact';

export default class Resume extends Component {

  render() {
    return (
      <div className='resume-page'>
        <Contact />
        <div className='section'>
          <h1 className='heading'>About me</h1>
          <p>Following my love for technology that began when I was a child.
              My early years were spent playing around with a Commodore 64/128, getting excited over changing the
              background colour of the computer screen. As I grew, so did my curiosity, I began playing with
              games creating mods, creating simple web pages, and even making simple games using tools such as Unity.
              Now, having the opportunity to change that inquisitive nature into a career, learning as much as
              possible along the way, I am embracing the future with an open mind, ready to tackle any challenge
              thrown my way.
      </p>
        </div>
      </div>
    )
  }
}
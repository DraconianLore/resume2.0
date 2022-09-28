import React, { Component } from 'react';
import Contact from './Contact';
import About from './About';
import Skills from './Skills';
import Work from './Work';
import Education from './Education';
import Projects from './Projects';

export default class Resume extends Component {
  
  render() {
    return (
      <div className='resume-page'>

        <div className='resume-page'>
          <Contact />
          <Skills />
          <About />
        </div>
        <div className='resume-page'>
          <div className='sec-half'>
            <Work showPortfolio={this.props.switchView} />
          </div>
          <div className='sec-half'>
            <Projects showPortfolio={this.props.switchView} />
            <Education showPortfolio={this.props.switchView} />
          </div>
        </div>
      </div>
    )
  }
}
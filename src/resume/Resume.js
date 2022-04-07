import React, { Component } from 'react';
import Contact from './Contact';
import About from './About';
import Skills from './Skills';
import Work from './Work';
import Education from './Education';

export default class Resume extends Component {
  scrollToPortfolio = () => {
    this.props.scrollTo('Porftolio')
  }
  render() {
    return (
      <div className='resume-page'>

        <div className='resume-page'>
          <Contact />
          <Skills />
          <About />
        </div>
        <div className='resume-page'>
          <Work showPortfolio={this.props.switchView} />
          <Education showPortfolio={this.props.switchView} />
        </div>
      </div>
    )
  }
}
import React, { Component } from 'react';

export default class Work extends Component {

  render() {
    return (
      <div className='section wider'>
        <h1 className='heading'>Relevant Experience</h1>
        <hr className='exp-hr' />

        <h4 className='sub-heading'>Software Engineer<span className="right-side">Feb 2020 - June 2021</span></h4>
        <h4 className='sub-sub-heading'>Lighthouse Labs<span className="right-side">Vancouver, Canada</span></h4>
        <ul className='res-description'>
          <li>Working with Ruby-on-Rails and Javascript primarily, managing the public website <a href='https://www.lighthouselabs.ca'><strong>lighthouselabs.ca</strong></a> as well as the staff portal and CRM</li>
          <li>Worked on Compass and Rudder, the schools LMS</li>
          <li>Created and managed the <a href='https://data-challenge.lighthouselabs.ca/start'><strong>21 Day Data Challenge</strong></a> for Feb 2021.</li>
          <li>Onboarding and mentoring new staff remotely</li>
        </ul>
        <p><em>I started at Lighthouse Labs right before Covid-19 hit, while onboarding I helped transition to full 
          online classes on the Compass LMS. Once the move to online classes was settled, I moved over to the website and CRM 
          and took ownership of both applications. I designed and implemented new features, updated and replaced outdated pages,
          while providing support to staff, taking in feedback and implementing new workflows on the CRM to make WFH life easier for the company.</em></p>

        <h4 className='sub-heading'>Software Engineer<span className="right-side">Oct 2019 - Jan 2020</span></h4>
        <h4 className='sub-sub-heading'>Swerve Labs <span className="right-side">Vancouver, Canada</span></h4>
        <ul className='res-description'>
          <li>Contract development work using NodeJs and React to build a mobile PWA social media application</li>  
        </ul>
        
        <h4 className='sub-heading'>Finalist<span className="right-side">September 13-15, 2019</span></h4>
        <h4 className='sub-sub-heading'><a href="https://vanhacks.com/">Vanhacks 2019</a><span className="right-side">Vancouver, BC, Canada</span></h4>
        <ul className='res-description'>
          <li>Finalists in the <a href="https://vanhacks.com/"><strong><em>{'2019 Vanhacks < For social good >'}</em></strong> </a>hackathon.</li>
          <li>Created a platform for non-profit organisations to connect with IT specialists</li>
        </ul>
        <p><em>Worked with a team to create a solution to allow NPO's to list their needs such as 'we need a website' for developers/designers to donate their time and experience to help out in the community.</em></p>

        <h4 className='sub-heading'>Logistics Manager<span className="right-side">Feb 2016 - Dec 2018</span></h4>
        <h4 className='sub-sub-heading'>Big Mouth Foods Pty Ltd <span className="right-side">Sydney, NSW, Australia</span></h4>
        <ul className='res-description'>
          <li>Coordinated a team of six drivers delivering cold foods to customers across the NSW and ACT states.</li>
          <li>Trained new drivers</li>
          <li>Managed inventory and coordinated with the production team.</li>
          <li>Dealt directly with existing and potential clients and resolved customer complaints.</li>
        </ul>
        <p><em>During my time at Big Mouth, I refined my time management skills, and learnt a lot from stepping back to see the big picture to coordinate multiple people efficiently.</em></p>
      </div>
    )
  }
}
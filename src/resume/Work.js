import React, { Component } from 'react';

export default class Work extends Component {

  render() {
    return (
      <div className='section wider'>
        <h1 className='heading'>Relevant Experience</h1>
        <hr className='exp-hr' />

        <h4 className='sub-heading'>Software Engineer<span className="right-side">Oct 2019 - Jan 2019</span></h4>
        <h4 className='sub-sub-heading'>Swerve Labs <span className="right-side">Vancouver, Canada</span></h4>
        <ul className='res-description'>
          <li>Contract development work using NodeJs and React to build a mobile PWA social media application</li>  
        </ul>
        <p><em></em></p>
      
        <h4 className='sub-heading'>Completed Projects</h4>
        <ul className='res-description' onClick={this.props.showPortfolio}>
          {/* eslint-disable-next-line */}
          <a href='#' alt='View portfolio'>
            <li><strong>DM Player Tracker</strong> - <em>A Dungeons & Dragons tool made with Ruby-on-Rails and React</em></li>
            <li><strong>Κοῖος</strong> - <em>An immersive mobile game made with React native and Ruby-on-Rails</em></li>
            <li><strong>ChattyApp</strong> - <em>An anonymous chatroom made with React and NodeJs</em></li>
            <li><strong>Conligo</strong> - <em>A 'smart' todo list made with NodeJs and Express</em></li>
          </a>
        </ul>
        {/* eslint-disable-next-line */}
        <h4 className='sub-sub-heading portfolio-link'><a href="#" alt='view protfolio' onClick={this.props.showPortfolio}>View My Portfolio</a></h4>

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
          <li>Dealt directly with existing and potential clients and resolving customer complaints.</li>
        </ul>
        <p><em>During my time at Big Mouth, I refined my time management skills, and learnt a lot from stepping back to see the big picture to coordinate multiple people efficiently.</em></p>
      </div>
    )
  }
}
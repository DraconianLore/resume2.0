import React, { Component } from 'react';

export default class Projects extends Component {

  render() {
    return (
      <div className='section wider'>
        <h1 className='heading'>Projects/Portfolio</h1>
        <hr className='exp-hr' />
        <h4 className='sub-heading'>Completed Projects</h4>
        <ul className='res-description'>
          {/* eslint-disable-next-line */}
          <a href='#' alt='View portfolio'>
            <li onClick={() => this.props.showPortfolio(0)}><strong>DM Player Tracker</strong> - <em>A Dungeons & Dragons tool for DM's</em></li>
            <li onClick={() => this.props.showPortfolio(1)}><strong>Quote-Chat</strong> - <em>A slack addon for movie quotes</em></li>
            <li onClick={() => this.props.showPortfolio(2)}><strong>DonateIT</strong> - <em>A NPO-Dev matching platform</em></li>
            <li onClick={() => this.props.showPortfolio(3)}><strong>Κοῖος</strong> - <em>An immersive mobile game</em></li>
            <li onClick={() => this.props.showPortfolio(4)}><strong>Jungle</strong> - <em>An e-Commerce platform</em></li>
            <li onClick={() => this.props.showPortfolio(5)}><strong>ChattyApp</strong> - <em>An anonymous chatroom</em></li>
            <li onClick={() => this.props.showPortfolio(6)}><strong>Conligo</strong> - <em>A 'smart' todo list made with NodeJs and Express</em></li>
            <li onClick={() => this.props.showPortfolio(7)}><strong>Tweeter</strong> - <em>A simple Twitter clone</em></li>
          </a>
        </ul>
        <h4 className='sub-heading'>Current Projects</h4>
        <ul className='res-description' onClick={() => this.props.showPortfolio(8)}>
          {/* eslint-disable-next-line */}
          <a href='#' alt='View portfolio'>
            <li><strong>GameMatch</strong> - <em>A multiplayer game matcher for steam friends</em></li>
            <li><strong>Runescribe Familiar</strong> - <em>A tool for Dungeons and Dragons players using the Rune Scribe class</em></li>
            <li><strong>DMPT - Player Client</strong> - <em>A player client for the Dungeon Master Player Tracker</em></li>
          </a>
        </ul>
        {/* eslint-disable-next-line */}
        <h4 className='sub-sub-heading portfolio-link'><a href="#" alt='view protfolio' onClick={this.props.showPortfolio}>View My Portfolio</a></h4>
      </div>
    )
  }
}
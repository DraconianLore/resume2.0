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
            <li onClick={() => this.props.showPortfolio(0)}><strong>GameMatch</strong> - <em>A multiplayer game matcher for steam friends</em></li>
            <li onClick={() => this.props.showPortfolio(1)}><strong>DM Player Tracker</strong> - <em>A Dungeons & Dragons tool for DM's</em></li>
            <li onClick={() => this.props.showPortfolio(2)}><strong>Quote-Chat</strong> - <em>A slack addon for movie quotes</em></li>
            <li onClick={() => this.props.showPortfolio(3)}><strong>DonateIT</strong> - <em>A NPO-Dev matching platform</em></li>
          </a>
        </ul>
        <h4 className='sub-heading'>Current Projects</h4>
        <ul className='res-description' onClick={() => this.props.showPortfolio(9)}>
          {/* eslint-disable-next-line */}
          <a href='#' alt='View portfolio'>
            <li><strong>Runescribe Familiar</strong> - <em>A tool for D&D players using the Rune Scribe class</em></li>
            <li><strong>DMPT - Player Client</strong> - <em>A player client for the Dungeon Master Player Tracker</em></li>
          </a>
        </ul>
        {/* eslint-disable-next-line */}
        <h4 className='sub-sub-heading portfolio-link'><a href="#" alt='view protfolio' onClick={() => this.props.showPortfolio(0)}>View My Portfolio</a></h4>
      </div>
    )
  }
}
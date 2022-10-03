import React, { Component } from 'react';

export default class DmPlayerTracker extends Component {

  render() {
    return (
      <div>
        <a href='https://github.com/DraconianLore/dmPlayerTracker' target='_blank' rel="noopener noreferrer" className='portfolio-github-link'>
        <h1>DM Player Tracker</h1>
        <h4>A Dungeons & Dragons tool for DM's</h4>
        <br />
        <img src="images/dmplayertracker.gif" alt='DM Player Tracker' />
        </a>

        <section className='port-details' id='dmpt'>
          <a href="https://dmpt.stevenwing.dev" target="_blank" rel="noopener noreferrer" className='demo-link' ><p>View live demo here</p></a>
        <p>
        A tool for Dungeon masters to track their players and NPCs in Dungeons and Dragons
        </p>
        <ul>
        The user can view an overview of all their players and NPCs
            <li>
            See players name and level
            </li>
            <li>
            See players class and race
            </li>
            <li>
            See players passive perception
            </li>
            <li>
            See players max health
            </li>
            <li>
            See players AC, spell save DC, and initiative
            </li>
            <li>
            Click player for individual player tracking
            </li>
            </ul>
          
            <ul>
            See an individual players or NPCs stats 
            <li>
            See all the base stats and proficiencies
            </li>
            <li>
            See a list of cantrips and spells
            </li>
            <li>
            See abilities and feats
            </li>
            <li>
            See note and items of interest
            </li>
            <li>
            Update players stats as they level
            </li>
            </ul>
          
        <ul className='tech-stack'>
          <span className='ts-header'>
            Tech Stack:
            </span>
          <li>
            Ruby-on-Rails
          </li>
          <li>
            React
          </li>
        </ul>
        </section>
      </div>
    )
  }
}




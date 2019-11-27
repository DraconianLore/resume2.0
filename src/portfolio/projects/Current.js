import React, { Component } from 'react';


export default class Current extends Component {


  render() {
    return (
      <div>
        <h1>Current Projects</h1>
        
        <hr className='project-hr' />
        <h4>
          <a className='port-link' href='https://draconianlore.github.io/dmPlayerTracker' target='_blank' rel="noopener noreferrer">DM Player Tracker</a>
         </h4>
        <p>
        <em>A Dungeons & Dragons Player tracker for Dungeon Masters</em>
        </p>
        <p className='port-current'>
          My personal project, where as an avid D&D player, and regular Dungeon Master, I decided it would be nice to have an app to track player information for my players. Using React and Rails with a PostgreSQL database I am actively working on this project.
        </p>
        <hr className='project-hr' />
        <h4>
          <a className='port-link' href='http://www.stigma.ink' target='_blank' rel="noopener noreferrer">Stigma.ink</a>
         </h4>
        <p>
          <em>A site for tattoo artist to manage client bookings and events</em>
        </p>
        <p className='port-current'>
          A project I am collaborating on that allows tattoo artists to connect with clients to set up bookings, host events, and communicate directly with their clients. Using React and Rails with a PostgreSQL database and AWS hosting for images.
        </p>
        <hr className='project-hr' />
        <h1>Open Source Contributions</h1>
        <hr className='project-hr' />
        <h4>
          <a className='port-link' href='http://mapknitter.org' target='_blank' rel="noopener noreferrer">Mapknitter</a>
         </h4>
        <p>
          <em>An open source image(aerial) to map joining application</em>
        </p>
      
        
      </div>
    )
  }
}
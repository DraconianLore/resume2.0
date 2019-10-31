import React, { Component } from 'react';


export default class Current extends Component {


  render() {
    return (
      <div>
        <h1>Current Projects</h1>
        
        <hr className='project-hr' />
        <h4>
        <a className='port-link' href='https://github.com/rsmsnot/Sports-Guide' target='_blank' rel="noopener noreferrer">Sports Guide</a>
         </h4>
        <p>
        <em>A Sports guide/fixture list application</em>
        </p>
        <p className='port-current'>
          Working with a small team on this project, designed to display the times and which TV channel it will be showing on in your country.
        </p>
        <hr className='project-hr' />
        <h4>
          <a className='port-link' href='https://github.com/DraconianLore/dmPlayerTracker' target='_blank' rel="noopener noreferrer">DM Player Tracker</a>
         </h4>
        <p>
        <em>A Dungeons & Dragons Player tracker for Dungeon Masters</em>
        </p>
        <p className='port-current'>
          My personal project, where as an avid D&D player, and regular Dungeon Master, I decided it would be nice to have an app to track player information for my players. Using React and Rails with a PostgreSQL database I am actively working on this project.
        </p>
        <hr className='project-hr' />
        <h1>Open Source Contributions</h1>
        <hr className='project-hr' />
        <h4>
          <a className='port-link' href='https://github.com/publiclab/mapknitter' target='_blank' rel="noopener noreferrer">Mapknitter</a>
         </h4>
        <p>
          <em>An open source image(aerial) to map joining application</em>
        </p>

        
      </div>
    )
  }
}
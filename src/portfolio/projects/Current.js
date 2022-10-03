import React, { Component } from 'react';


export default class Current extends Component {


  render() {
    return (
      <div>
        <h1>Current Projects</h1>
        
        <hr className='project-hr' />
        <h4>
          <a className='port-link' href='https://github.com/DraconianLore/rune_scribe' target='_blank' rel="noopener noreferrer">Rune Scribe Familiar</a>
         </h4>
        <p>
        <em>A tool for Dungeons & Dragons</em>
        </p>
        <p className='port-current'>
          A tol for players to help keep track of the details of the Rune Scribe class I created for Dungeons & Dragons 5th edition, including a new complex magic system.
        </p>

        <hr className='project-hr' />
        <h4>
          <a className='port-link' href='https://github.com/alumni-lab/DMPT-PlayerClient' target='_blank' rel="noopener noreferrer">DMPT - Player Client</a>
         </h4>
        <p>
        <em>A player client for the Dungeon Master Player Tracker</em>
        </p>
        <p className='port-current'>
          Having built the <a href='https://draconianlore.github.io/dmPlayerTracker'>Dungeon Master Player Tracker</a> and having it working to a satisfactory point, I am now leading a small team in designing and building a client for players in games where the Dungeon Master is using the DMPT. Using the DMPT API as well as websockets for live updates, players can keep track of their stats and inventory, send private messages to the DM, and make notes, without the need for a pen and paper character sheet.
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

import React, { Component } from 'react';

export default class DmPlayerTracker extends Component {

  render() {
    return (
      <div>
        <a href='https://github.com/DraconianLore/GameLibrary' target='_blank' rel="noopener noreferrer" className='portfolio-github-link'>
        <h1>GameMatch</h1>
        <h4>A multiplayer game tool for friends</h4>
        <br />
        <video width="100%" loop autoPlay>
          <source src="/images/GameMatch.webm" type="video/webm" />
          Sorry, your browser doesn't support videos.
        </video>
        </a>

        <section className='port-details'>
          <a href="https://gamamatch.stevenwing.dev" target="_blank" rel="noopener noreferrer" ><p><u>View live demo here</u></p></a>
        <p>
        An app where you can log in with steam and see which multiplayer games a group of friends all have.
        </p>
        <ul>
        The user can also
            <li>
              See wishlist games on special
            </li>
            <li>
              See what platforms the game runs on
            </li>
            <li>
              Quickly see if a game is PvP and/or Co-op by tags on the games
            </li>
            <li>
              Filter games by various fields
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




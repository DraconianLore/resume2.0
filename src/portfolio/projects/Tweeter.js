import React, { Component } from 'react';

export default class Tweeter extends Component {

  render() {
    return (
      <div>
        <h1>Tweeter<a href='https://github.com/DraconianLore/tweeter'><img src='images/GitHub-Mark.png' alt='See on github' className='github-link' /></a></h1>
        <h4>A Twitter Clone</h4>
        <br />
        <img src="images/tweeter.png" alt='Tweeter' />
        <p>
        A single-page AJAX-based Twitter clone
        </p>
        <ul className='tech-stack'>
          <span className='ts-header'>
            Tech Stack:
            </span>
          <li>
            NodeJS
          </li>
          <li>
            Express
          </li>
          <li>
            MongoDB
          </li>
        </ul>
      </div>
    )
  }
}
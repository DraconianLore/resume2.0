import React, { Component } from 'react';

export default class Tweeter extends Component {

  render() {
    return (
      <div>
        <a href='https://github.com/DraconianLore/tweeter' target='_blank' rel="noopener noreferrer" className='portfolio-github-link'>
        <h1>Tweeter</h1>
        <h4>A Twitter Clone</h4>
        <br />
        <img src="images/tweeter.png" alt='Tweeter' />
        </a>

        <section className='port-details'>
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
        </section>
      </div>
    )
  }
}
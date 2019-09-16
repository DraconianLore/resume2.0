import React, { Component } from 'react';

export default class DonateIT extends Component {

  render() {
    return (
      <div>
        <a href='https://github.com/ChesterCorin/vanhacks-2019-frontend' target='_blank' rel="noopener noreferrer" className='portfolio-github-link'>
        <h1>Dontae IT</h1>
        <h4>An NPO - Dev matching platform</h4>
        <br />
        <img src='images/donateIT.gif' alt='DonateIT' />
        </a>
        <p>
          Created during the {'2019 Vanhacks < For social good >'} hackathon, this application allows not for profit organisations to post their IT problems such as 'We need a website' for developers/designers to match with to donate their time and experience to help out in the community.
        </p>
        <ul className='tech-stack'>
          <span className='ts-header'>
            Tech Stack:
            </span>
          <li>
            Angular
          </li>
          <li>
            Ruby-on-Rails
          </li>
          <li>
            PostgreSQL
          </li>
          <li>
            Heroku(hosting)
          </li>
        </ul>
      </div>
    )
  }
}
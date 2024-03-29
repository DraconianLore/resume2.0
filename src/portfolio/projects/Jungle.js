import React, { Component } from 'react';

export default class Jungle extends Component {

  render() {
    return (
      <div>
        <a href='https://github.com/DraconianLore/jungle-rails' target='_blank' rel="noopener noreferrer" className='portfolio-github-link'>
        <h1>Jungle</h1>
        <h4>An e-Commerce application</h4>
        <br />
        <img src="images/jungle.png" alt='Jungle' />
        </a>

        <section className='port-details'>
        <p>
          I took this project from a template of A mini e-commerce application built with Rails 4.2 for purposes of teaching Rails by example, riddled with bugs and terrible design to where it is now, learning ruby on rails in the week I worked on this project.        </p>
        <ul className='tech-stack'>
          <span className='ts-header'>
            Tech Stack:
            </span>
          <li>
            Ruby-on-Rails
          </li>
          <li>
            Sass
          </li>
          <li>
            PostgreSQL
          </li>
        </ul>
        </section>
      </div>
    )
  }
}
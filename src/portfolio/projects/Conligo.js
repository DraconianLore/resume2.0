import React, { Component } from 'react';

export default class Conligo extends Component {

  render() {
    return (
      <div>
        <a href='https://github.com/wonseobshin/conligo' target='_blank' rel="noopener noreferrer" className='portfolio-github-link'>
        <h1>Conligo</h1>
        <h4>A Smart Todo List</h4>
        <br />
        <img src="images/conligo.png" alt='Conligo' />
        </a>

        <section className='port-details'>
        <p>
        This "Smart Todo List" categorizes items the user inputs into one of four categories by using various API calls to find out what the item is. The majority of this project was pair programmed.
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
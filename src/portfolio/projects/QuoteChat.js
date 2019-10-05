import React, { Component } from 'react';

export default class QuoteChat extends Component {

  render() {
    return (
      <div>
        <a href='https://github.com/alumni-lab/quote-chat' target='_blank' rel="noopener noreferrer" className='portfolio-github-link'>
        <h1>Quote-Chat</h1>
        <h4>A slack app</h4>
        <br />
        <img src="images/quoteChat.gif" alt='Quote Chat' />
        </a>

        <section className='port-details'>
        <p>
        A slack app using slash commands
        </p>
        <ul>
        Once installed in a workspace, users can:
            <li>
            type /quote -help for instructions
            </li>
            <li>
            type /quote [some quote here] to find and display three quotes matching the input
            </li>
            <li>
            press the shuffle button to see three more options
            </li>
            <li>
            select a quote and post it to the channel
            </li>
            </ul>

        <ul className='tech-stack'>
          <span className='ts-header'>
            Tech Stack:
            </span>
          <li>
            Express
          </li>
          <li>
            Node.JS
          </li>
          <li>
            Python (script scraper and DB filler)
          </li>
          <li>
            PostgreSQL
          </li>
          <li>
            Heroku (hosting)
          </li>
        </ul>
        </section>
      </div>
    )
  }
}




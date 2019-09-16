import React, { Component } from 'react';

export default class Chatty extends Component {

  render() {
    return (
      <div>
        <a href='https://github.com/DraconianLore/chattyApp' target='_blank' rel="noopener noreferrer" className='portfolio-github-link'>
        <h1>ChattyApp</h1>
        <h4>An anonymous chatroom</h4>
        <br />
        <img src="images/chattyapp.png" alt='ChattyApp' />
        </a>

        <section className='port-details'>
        <p>
          A compact Anonymous chatroom.
        </p>
        <ul>
          Upon entering the chatroom each user is assigned a random name based on an animal ie: Anonymous Crocodile. Users can:
          <li>
            Change their name
          </li>
          <li>
          Change the colour of their name and messages
          </li>
          <li>
          Post an image/meme from a URL
          </li>
          <li>
          Type /me does something to send a notification of [username] does something
          </li>
          <li>
          Add emoji to their messages
          </li>
          <li>
          See how many users are connected, and get notifications when people join or leave
          </li>
          <li>
          Get browser notifications when someone sends a message
          </li>
          <li>
          Share a URL link
          </li>
        </ul>

        <ul className='tech-stack'>
          <span className='ts-header'>
            Tech Stack:
            </span>
          <li>
            NodeJS
          </li>
          <li>
            React
          </li>
          <li>
            Sass
          </li>
          <li>
            Websockets
          </li>
        </ul>
        </section>
      </div>
    )
  }
}
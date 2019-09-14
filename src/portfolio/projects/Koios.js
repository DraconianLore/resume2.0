import React, { Component } from 'react';

export default class Koios extends Component {

  render() {
    return (
      <div>
        <a href='https://github.com/DraconianLore/Koios' target='_blank' rel="noopener noreferrer">
        <h1>Κοῖος</h1>
        <h4>An immersive mobile game</h4>
        <br />
        <img src="images/koios.png" alt='Koios' />
        </a>
        <p>
          Κοῖος is an immersive game where users enlist as agents in a secret organization where they are encouraged to take a break from their daily lives and complete missions by interacting with the world around them. Initially users are presented with baisc 'training' missions to build up trust within the organisation, taking photos of objects, taking selfies with other people or places, and sending them off to be verified by other agents(including new agents) 
        </p>
        <ul>
        As the agents gain trust, they gain ranks in the organisation which leads to harder missions including:
          <li>
            Encryption missions - where the agent is given a word or phrase and must encrypt it using a type of cypher provided.
          </li>
          <li>
            Decryption missions - where the agent is given an encrypted message and must discover the type of encryption used and decypher the message.
          </li>
          <li>
            To be implemented in later updates
          </li>
          <li>
            Dead-drop missions - where the agent must write out or print a message and leave it in a location where another agent will come to pick it up.
          </li>
          <li>
            Handoff missions - where the agent must meet another agent and secretly hand them a message.
          </li>
          <li>
            Advanced decryption missions - where the agent recieves an image, sound clip, or video clip and must find a message hidden in the file.
          </li>
        </ul>
        <ul className='tech-stack'>
          <span className='ts-header'>
            Tech Stack:
            </span>
          <li>
            React Native
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
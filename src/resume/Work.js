import React, { Component } from 'react';

export default class Work extends Component {

  render() {
    return (
      <div className='section wider'>
        <h1 className='heading'>Relevant Experience</h1>
        <h4 className='sub-heading'>Logistics Manager<span className="right-side">Feb 2016 - Dec 2018</span></h4>
        <h4 className='sub-sub-heading'>Big Mouth Foods Pty Ltd <span className="right-side">Sydney, NSW, Australia</span></h4>
        <ul className='res-description'>
          <li>Coordinated a team of six drivers delivering cold foods to customers across the NSW and ACT states.</li>
          <li>Trained new drivers</li>
          <li>Managed inventory and coordinated with the production team.</li>
          <li>Dealt directly with existing and potential clients and resolving customer complaints.</li>
        </ul>
        <p><em>During my time at Big Mouth, I refined my time management skills, and learnt a lot from stepping back to see the big picture to coordinate multiple people efficiently.</em></p>
        <hr className='exp-hr' />
        <h4 className='sub-heading'>Truck Manager <span className="right-side">May 2015 - Feb 2016</span></h4>
        <h4 className='sub-sub-heading'>Mama Linh's Food Trucks <span className="right-side">Sydney, NSW, Australia</span></h4>
        <ul>
          <li>Managed the running of a food truck for regular street trade</li>
          <li>Worked with the owner to run events</li>
          <li>Direct customer service</li>
          <li>Staff management</li>
        </ul>
        <p><em>I learnt a lot in this position, particularly in dealing with staff and stock managment.</em></p>
      </div>
    )
  }
}
import React, { Component } from 'react';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolio: 'active-tab',
      resume: 'inactive-tab'
    }
  }
  setActive = (e) => {
    e.preventDefault();
    const clicked = e.target.id;
    if (this.state[clicked] === 'inactive-tab') {
      if (clicked === 'portfolio') {
        this.setState({
          portfolio: 'active-tab',
          resume: 'inactive-tab'
        })
        this.props.setActive('portfolio')
      } else {
        this.setState({
          portfolio: 'inactive-tab',
          resume: 'active-tab'
        })
        this.props.setActive('resume')
      }
    }
  }
  render() {
    return (
      <div className="top-bar">
        <span className='my-name'>Steven Wing</span>
        {this.state.resume === 'active-tab' && <a className='printable' href='Steven Wing - Resume.pdf'><i className="fas fa-print"></i> Printable Résumé</a>}
        <button id='portfolio' className={this.state.portfolio} onClick={this.setActive}>
          Portfolio
        </button>
        <button id='resume' className={this.state.resume} onClick={this.setActive}>
          Résumé
        </button>
      </div>

    )
  }
}

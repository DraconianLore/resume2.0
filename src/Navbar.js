import React, { Component } from 'react';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolio: 'inactive-tab',
      resume: 'active-tab'
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
  UNSAFE_componentWillReceiveProps(newProps) {
    if (newProps.showPortfolio) {
      this.setState({
        portfolio: 'active-tab',
        resume: 'inactive-tab'
      })
    }
  }
  render() {
    return (
      <div className="top-bar">
        <span className='my-name'>Steven Wing</span>
        {this.state.resume === 'active-tab' && this.props.isMobile === false && <a className='printable' target="_blank" href='Steven Wing - Resume.pdf'><i className="fas fa-print"></i> Printable Résumé</a>}
        <button id='resume' className={this.state.resume} onClick={this.setActive}>
          Résumé
        </button>
        <button id='portfolio' className={this.state.portfolio} onClick={this.setActive}>
          Portfolio
        </button>
      </div>

    )
  }
}

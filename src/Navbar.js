import React, { Component } from 'react';

export default class Navbar extends Component {
  scrollToPortfolio = () => {
    this.props.scrollTo('Porftolio')
  }
  scrollToResume = () => {
    this.props.scrollTo('Resume')
  }

  render() {
    return (
      <div className="top-bar">
        <span className='my-name'>Steven Wing</span>
        {this.props.isMobile === false && <a className='printable' target="_blank" href='Steven Wing - Resume.pdf'><i className="fas fa-print"></i> Printable Résumé</a>}
        <button className='navButtons' onClick={this.scrollToResume} >
          Résumé
        </button>
        <button className='navButtons' onClick={this.scrollToPortfolio} >
          Portfolio
        </button>
      </div>

    )
  }
}

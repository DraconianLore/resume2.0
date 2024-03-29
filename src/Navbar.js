import React, { Component } from 'react';

export default class Navbar extends Component {
   render() {
    return (
      <div className="top-bar">
        <span className='my-name'>Steven Wing</span>
        {/* {this.props.isMobile === false && <a className='printable' target="_blank" href='Steven Wing - Resume.pdf'><i className="fas fa-print"></i> Printable Résumé</a>} */}
        <button className='navButtons' onClick={() => this.props.switchView(0)} >
          Résumé
        </button>
        <button className='navButtons' onClick={(e) => window.location.href="https://projects.stevenwing.dev"}>
          Portfolio
        </button>
      </div>

    )
  }
}

import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Resume from './resume/Resume';
import Portfolio from './portfolio/Portfolio';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      activePage: 'portfolio'
    }
  }

  setActive = (pageName) => {
    this.setState({activePage: pageName})
  }
  render() {

    return (
      <div className="App">
        <Navbar setActive={this.setActive} />
        {this.state.activePage === 'portfolio' && <Portfolio />}
        {this.state.activePage === 'resume' && <Resume />}
      </div>
    );
  }
}

export default App;

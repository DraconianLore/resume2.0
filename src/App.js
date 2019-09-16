import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Resume from './resume/Resume';
import Portfolio from './portfolio/Portfolio';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      activePage: 'resume',
      showPortfolio: false
    }
  }
  showPortfolio = () => {
    this.setState({
      showPortfolio: true,
      activePage: 'portfolio'
    })
  }
  setActive = (pageName) => {
    this.setState({
      activePage: pageName,
      showPortfolio: false
    })
  }
  render() {

    return (
      <div className="App">
        <Navbar setActive={this.setActive} showPortfolio={this.state.showPortfolio} />
        {this.state.activePage === 'portfolio' && <Portfolio />}
        {this.state.activePage === 'resume' && <Resume showPortfolio={this.showPortfolio} />}
      </div>
    );
  }
}

export default App;

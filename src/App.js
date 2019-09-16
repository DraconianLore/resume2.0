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
      showPortfolio: false,
      mobile: false
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
  componentDidMount() {
    console.log(window.innerWidth)
   if (window.innerWidth < 769) {
     this.setState({mobile: true})
   } 
  }
  render() {

    return (
      <div className="App">
        <Navbar isMobile={this.state.mobile} setActive={this.setActive} showPortfolio={this.state.showPortfolio} />
        {this.state.activePage === 'portfolio' && <Portfolio />}
        {this.state.activePage === 'resume' && <Resume showPortfolio={this.showPortfolio} />}
      </div>
    );
  }
}

export default App;

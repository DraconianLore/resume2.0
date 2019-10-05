import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Resume from './resume/Resume';
import Portfolio from './portfolio/Portfolio';
import scrollToComponent from 'react-scroll-to-component';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: false
    }
  }
  scrollToContent = (content) => {
    if (content === 'Resume') {
      scrollToComponent(this.resume, {
        offset: -50,
        align: 'top',
        duration: 1000
    });
    } else {
      scrollToComponent(this.portfolio, {
        offset: -50,
        align: 'top',
        duration: 1000
    })
    }
  }

  componentDidMount() {
    if (window.innerWidth < 769) {
      this.setState({ mobile: true })
    }
  }

  render() {

    return (
      <div className="App">
        <Navbar isMobile={this.state.mobile} scrollTo={this.scrollToContent} />
        <Resume showPortfolio={this.showPortfolio} ref={(section) => { this.resume = section; }} scrollTo={this.scrollToContent} />
        <Portfolio ref={(section) => { this.portfolio = section; }} />
      </div>
    );
  }
}

export default App;

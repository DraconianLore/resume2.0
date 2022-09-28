import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Resume from './resume/Resume';
import Portfolio from './portfolio/Portfolio';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: false,
      portfolio: false,
      portfolioItem: 0
    }
  }

  switchView = (item) => {
    this.setState({
      portfolio: !this.state.portfolio,
      portfolioItem: item || 0
    })
  }

  componentDidMount() {
    if (window.innerWidth < 769) {
      this.setState({ mobile: true })
    }
  }

  render() {

    return (
      <div className="App">
        <Navbar isMobile={this.state.mobile} switchView={this.switchView} />
        {this.state.portfolio ?  <Portfolio portfolioItem={this.state.portfolioItem}/> : <Resume switchView={this.switchView} />}
      </div>
    );
  }
}

export default App;

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
      mobile: false,
      portfolio: false
    }
  }

  switchView = () => {
    this.setState({portfolio: !this.state.portfolio})
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
        {this.state.portfolio ?  <Portfolio /> : <Resume switchView={this.switchView} />}
      </div>
    );
  }
}

export default App;

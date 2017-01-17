import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import About from './About';
import BootstrapNavBar from './BootstrapNavBar';
import MayorMessage from './MayorMessage';
import Weather from './Weather';


class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <BootstrapNavBar functionFromParent={this.handleSearch} />
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;

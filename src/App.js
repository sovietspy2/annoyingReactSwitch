import React from 'react';
import logo from './logo.svg';
import './App.css';
import Switch from "react-switch";

class App extends React.Component {

  state = {
      switchOne: true,
      switchTwo: false,
      switchThree: true,
  }
  
  render() {
    return (
      <div className="container">
      
      <div>
      <label>
          <span>Social life</span>
          <Switch onChange={(v) => this.handleChange("switchOne",v)} checked={this.state.switchOne} />
      </label>
      </div>
      <div>
      <label>
          <span>Work</span>
          <Switch onChange={(v) => this.handleChange("switchTwo",v)} checked={this.state.switchTwo} />
      </label>
      </div>
      <div>
      <label>
          <span>Sleep</span>
          <Switch onChange={(v) => this.handleChange("switchThree",v)} checked={this.state.switchThree} />
      </label>
      </div>
        
      </div>
    );
  }

  handleChange(key,v) {

    const switches = ["switchOne", "switchTwo", "switchThree"].filter(x => x !== key);

    console.log(switches);

    this.setState({
      [key]: v,
      [switches[0]]: this.state[switches[0]],
      [switches[0]]: !this.state[switches[0]]
      });
    }
 
}

export default App;

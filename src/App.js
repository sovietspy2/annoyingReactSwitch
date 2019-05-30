import React from 'react';
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

    if (!v) {
      this.setState({
        [key]: v,
        [switches[0]]: true ,
        [switches[1]]: true 
        });

    } else {
      this.shuffleArray(switches);
  
      this.setState({
        [key]: v,
        [switches[0]]: this.state[switches[0]],
        [switches[1]]: !this.state[switches[1]]
        });
    }
    
    }

    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
  }
 
}

export default App;

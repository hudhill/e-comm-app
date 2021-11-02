import React, {Component} from "react";

class MainContent extends Component {
  state = {appTitle:"Customers"};
  render(){
    return (
      <div>
        <h4>{this.state.appTitle}</h4>
      </div>
    );
  }
}

export default MainContent
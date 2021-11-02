import React, {Component} from "react";

class MainContent extends Component {
  state = {pageTitle:"Customers", customerCount:5};
  render(){
    return (
      <div>
        <h4 className="border-bottom m-1 p-1">{this.state.pageTitle}
          <span className="badge badge-secondary m-2">{this.state.customerCount}</span>
          <button className="btn btn-info" onClick={this.onRefreshClick}>Refresh</button>
        </h4>
      </div>
    );
  }

  onRefreshClick(){
    console.log("Refreshclicked");
  }

}

export default MainContent
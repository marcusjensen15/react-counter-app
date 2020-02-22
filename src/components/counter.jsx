import React, { Component } from 'react';


class Counter extends Component{
  state = {
    value: this.props.value
  };

  handleIncrement = (e) => {
    this.setState({value: this.state.value + 1});
  };

//if you use arrow functions you never need to bind 'this'
// you can use a callback within an onClick to eleminate the need for creating a 'handler' function




  render(){

    console.log(this.props);
    return (
    <div>
      <h4>Counter #{this.props.title}</h4>
       <span className={this.getBadgeClasses()}> {this.formatCount()} </span> <button onClick={() => this.handleIncrement("puppy")} className="btn btn-secondary btn-sm">Increment</button>
       <button onClick={()=>this.props.onDelete(this.props.title)} className="btn btn-danger btn-sm m-2">Delete</button>

    </div>

  );
  }

  getBadgeClasses(){
    let classes = "badge m-2 badge-";
    classes += (this.state.value === 0) ? "warning" : "primary";
    return classes;

  }

  formatCount(){
    const { value }= this.state;
    return value === 0 ? 'Zero' : value;

  }
}

export default Counter;

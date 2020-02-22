import React, { Component } from 'react';


class Counter extends Component{
  state = {
    count: 0,
    tags: ['tag1','tag2','tag3']
  };

  handleIncrement = (e) => {
    console.log(e)
    this.setState({count: this.state.count + 1});
  };

  doHandleIncrement = () => {
    this.handleIncrement({id: 1});

  }

//if you use arrow functions you never need to bind 'this'
// you can use a callback within an onClick to eleminate the need for creating a 'handler' function


  render(){

    return (
    <div>
       <span className={this.getBadgeClasses()}> {this.formatCount()} </span> <button onClick={() => this.handleIncrement({id:1})} className="btn btn-secondary btn-sm">Increment</button>;
      <ul>
        {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
      </ul>
    </div>

  );
  }

  getBadgeClasses(){
    let classes = "badge m-2 badge-";
    classes += (this.state.count === 0) ? "warning" : "primary";
    return classes;

  }

  formatCount(){
    const { count }= this.state;
    return count === 0 ? 'Zero' : count;

  }
}

export default Counter;

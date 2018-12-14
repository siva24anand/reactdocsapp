import React from 'react';

class LoggingButton extends React.Component{
    handleClick =() =>{
      console.log('this is', this);
    }
    render(){
      return(
        <button onClick={this.handleClick}>
        click me
        </button>
      );
    }
  }
  ////
  class LoggingButton1 extends React.Component{
    handleClick(){
      console.log('this is',this);
    }
    render(){
      return(
        <button onClick={(e) => this.handleClick(e)}>
        clickme1
        </button>
      )
    }
  }
  ////this will not work
  class LoggingButton2 extends React.Component{
    handleClick(){
      console.log('this is',this);
    }
    render(){
      return(
        <button onClick={this.handleClick}>
        clickme1
        </button>
      )
    }
  }
  
  
  export default LoggingButton;
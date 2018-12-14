import React from 'react';

class Toggle extends React.Component{
    constructor(props){
      super(props);
      this.state = {isToggleOn:true};
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
    }
    
  render(){
    return(
      <div>
      <h2>Button changes in react</h2>
      <button onClick = {this.handleClick}>
        {this.state.isToggleOn ? 'ON':'OFF'}
      </button>
      </div>
    );
  }
  }
  
  export default Toggle;
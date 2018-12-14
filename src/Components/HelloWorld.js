import React from 'react';

class HelloWorld extends React.Component{
    render() {
      const name = 'siva'
      return (
        <div>
            <p>
              Hello, {formatName(user)} !
            </p>
            <p>
              <Welcome name = "siva" company = "infy" />
            </p>
            <p>
               {tick()}
            </p>
        </div>
      );
    }
  }
  function Welcome(props){
    return (
    <h1>Hello, {props.name}</h1>,
    <Company company = {props.company}/>
    );
  }
  function Company(props){
    return(
  <h2>{props.company}</h2>
    );
  }
  function tick(){
    const element = (
      <div>
        <h2>
          It is {new Date().toLocaleTimeString()}
        </h2>
      </div>
    );
    return element;
  }
  
  function formatName(user){
    if(user){
      return user.firstName + ' ' + user.lastName; 
    }
    return 'Stranger';
    
  }
  const user = {
    firstName : "siva",
    lastName:"anand"
  };
  const user1 = null;

  export default HelloWorld;
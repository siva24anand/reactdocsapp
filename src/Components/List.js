import React from 'react';

function NumberList(props){

    const numbers = props.numbers;
    const listItems = numbers.map((number) => 
    //<li key={number.toString()}>{number}</li>
    <ListItems key = {number.toString()} value = {number} />
    );

    return(
        <ul>{listItems}</ul>
    );
}

function ListItems(props){
    return <li>{props.value}</li>;
}

export default NumberList;
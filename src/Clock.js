import React from 'react';

class Clock extends React.Component {
    constructor(props){
        super(props);
    }
    render()
    {
    const tempo = Date.now() + this.props.timezone * 3600 * 1000;
    const  data = new Date(tempo);

    return <h2>{this.props.country} sono le {data.toLocaleTimeString()}</h2>
    }
}

export default Clock;

/*
function clock(props){
    const tempo = Date.now() + props.timezone * 3600 * 1000;
    const  data = new Date(tempo);

    return <h2>{props.country} sono le {data.toLocaleTimeString()}</h2>
} 

export default clock;

*/
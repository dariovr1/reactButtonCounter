import React from 'react';

class ButtonCounter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            counter : 0,
            max : 10
        }
    }

    incrementCount = () => {
        this.setState({
                counter: this.state.counter + 1
          });

    }

    decrementCount = () => {
        this.setState({
            counter: this.state.counter - 1
      });
    }



    ToggleClick = () => {
        this.setState(
            (prevState) => {
               (prevState.counter == this.state.max) ? this.decrementCount()  : this.incrementCount();
            }
        );
    }


    render(){
        return (
        <React.Fragment>
        <button onClick={ this.ToggleClick  }>{(this.state.counter == this.state.max) ? 'click for decrease!'  : 'click for increase!'}</button>
        <p>il bottone è stato cliccato {this.state.counter} volte</p>
        </React.Fragment>
        );
    }
}


export default ButtonCounter;

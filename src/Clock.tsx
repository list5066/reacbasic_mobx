import React from "react";
interface IClockState {
    date: Date
}
class Clock extends React.Component {
    state: IClockState

    updateHandler(evt:any) {
        console.log('setting state date');
        this.setState({date: new Date()});
    }

    constructor(props:any) {
      super(props);
      this.state = {date: new Date()};
      this.updateHandler = this.updateHandler.bind(this);
    }
  
    componentDidMount() {
        console.log('inside componentDidMount');
    }
  
    componentWillUnmount() {
        console.log('inside componentWillUnmount');
    }
  
    render() {
      return (
        <div>
          <h1>Clock ClassComponent!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          <button onClick={this.updateHandler}>update time</button>
        </div>
      );
    }
}
export default Clock;
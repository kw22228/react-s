import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(props){
        super(props);
        this.state = { date: new Date() };

        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        this.timerID = setInterval(() => {
            this.tick();
        }, 1000);
    }

    componentDidUpdate() {
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({ date: new Date() });
    }

    handleClick() {
        alert(this.state.date)
    }

    render() {
        return (
            <div>
                <h1 onClick={this.handleClick}>React</h1>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

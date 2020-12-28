import React from "react"

// import PropTypes from "prop-types";

class App extends React.Component {
    constructor(props) {
        super(props);
        console.log("hello");
    }
    state = {
        count: 0
    };
    add = () => {
        this.setState(current => ({count: current.count + 1}));
        console.log("add");
    };

    minus = () => {
        this.setState(current => ({count: current.count - 1}));
        console.log("minus");
    };

    componentDidMount() {
        console.log("componentDidMount");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    render() {
        console.log("render");
        return <div>
            <h1>The number is {this.state.count}</h1>
            <button onClick={this.add}>Add</button>
            <button onClick={this.minus}>Minus</button>
        </div>
    }
}

export default App;
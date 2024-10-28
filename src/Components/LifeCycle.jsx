import React from 'react'

class LifeCycle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    componentDidMount() {
        console.log('Component did mount');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Component did update');
    }

    componentWillUnmount() {
        console.log('Component will unmount');
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

export default LifeCycle

import React, { Component } from 'react';
export class AppHistory extends Component {
    constructor(props) {
        super(props);
        this.stack = [];
        this.newLine();
        this.state = { stack: [] };
    }
    newLine() {
        this.stack.push([]);
    }
    addNumber(value) {
        this.stack[this.stack.length - 1] += value;
        this.setState({ stack: this.stack });
    }
    addOperator(value) {
        this.stack[this.stack.length - 1] += value;
        this.setState({ stack: this.stack });
    }
    addEqual(value) {
        let line = this.stack[this.stack.length - 1];
        if (line.length === 0)
            return;
        let result;
        try {
            // eslint-disable-next-line
            result = eval(line);
        }
        catch (e) {
            console.error('evaluate error for line', line);
            return;
        }
        this.stack[this.stack.length - 1] += ' ' + value + ' ';
        this.newLine();
        this.stack[this.stack.length - 1] = result.toString();
        this.setState({ stack: this.stack });
    }
    clear() {
        this.stack = [];
        this.newLine();
        this.setState({ stack: [] });
    }
    del() {
        if (this.stack.length === 0)
            return;
        let line = this.stack[this.stack.length - 1];
        if (line.length === 0)
            return;
        line = line.substring(0, line.length - 1);
        this.stack[this.stack.length - 1] = line;
        this.setState({ stack: this.stack });
    }
    render() {
        return React.createElement('div', { className: 'history' }, this.stack.map((item, index) => {
            return React.createElement('div', { key: index }, item);
        }));
    }
    componentDidMount() {
        this.props.onRef(this);
    }
    componentWillUnmount() {
        this.props.onRef(undefined);
    }
    shouldComponentUpdate() {
        return true;
    }
}
//# sourceMappingURL=App.History.js.map
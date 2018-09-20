import { AppHistory } from "./App.History";
import { AppKeyCodes } from "./App.KeyCodes";
import React, { Component } from 'react';
export class AppCalculator extends Component {
    constructor(props, history) {
        super(props);
        this.keyCodes = new AppKeyCodes();
        this.clickHandler = this.clickHandler.bind(this);
    }
    render() {
        return (React.createElement("div", { className: "app-calculator", style: { marginTop: '50px' }, tabIndex: "1", ref: (div) => {
                this.appHolder = div;
            }, onKeyDown: e => this.keyboardHandler(e), onClick: this.clickHandler },
            React.createElement(AppHistory, { onRef: ref => (this.history = ref) }),
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "column column1" },
                    React.createElement("div", { className: "row row1" },
                        React.createElement("button", null),
                        React.createElement("button", null, "C"),
                        React.createElement("button", null, "Del")),
                    React.createElement("div", { className: "row row1" },
                        React.createElement("button", null, "7"),
                        React.createElement("button", null, "8"),
                        React.createElement("button", null, "9")),
                    React.createElement("div", { className: "row row2" },
                        React.createElement("button", null, "4"),
                        React.createElement("button", null, "5"),
                        React.createElement("button", null, "6")),
                    React.createElement("div", { className: "row row3" },
                        React.createElement("button", null, "1"),
                        React.createElement("button", null, "2"),
                        React.createElement("button", null, "3")),
                    React.createElement("div", { className: "row row4" },
                        React.createElement("button", null),
                        React.createElement("button", null, "0"),
                        React.createElement("button", null, "."))),
                React.createElement("div", { className: "column column2" },
                    React.createElement("button", null, "/"),
                    React.createElement("button", null, "*"),
                    React.createElement("button", null, "-"),
                    React.createElement("button", null, "+"),
                    React.createElement("button", null, "=")))));
    }
    keyboardHandler(event) {
        event = event || window.event;
        if (!event || 'object' !== typeof event)
            return false;
        if (event.altKey || event.ctrlKey)
            return;
        var keyCode = event.which || event.keyCode || event.charCode;
        console.log("key", event.key, keyCode);
        if (keyCode === null || keyCode === undefined)
            return false;
        let isShift = !!event.shiftKey;
        let value = this.keyCodes.getValue(keyCode, isShift);
        if (value)
            this.valueHandler(value);
    }
    clickHandler(event) {
        if (event.target.tagName !== "BUTTON")
            return;
        let value = event.target.innerText;
        console.log(value);
        this.valueHandler(value);
    }
    valueHandler(value) {
        if (!value)
            return;
        if (value === "=")
            this.history.addEqual(value);
        else if (value === "C")
            this.history.clear();
        else if (value === "Del")
            this.history.del();
        else if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."].includes(value))
            this.history.addNumber(value);
        else
            this.history.addOperator(value);
    }
    componentDidMount() {
        this.appHolder.focus();
    }
}
//# sourceMappingURL=App.Calculator.js.map
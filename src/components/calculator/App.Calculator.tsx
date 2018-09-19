import React, {Component} from 'react';
import {AppHistory} from "./App.History";
import {AppKeyCodes} from "./App.KeyCodes";


export class AppCalculator extends Component {
    buttons: { numbers: [] };
    keyCodes: AppKeyCodes;
    history: AppHistory;
    appHolder: HTMLElement;

    constructor(history: AppHistory) {
        super();
        this.keyCodes = new AppKeyCodes();
        this.clickHandler = this.clickHandler.bind(this);
    }

    render() {
        return (
            <div className="app-calculator"
                 style={{marginTop: '50px'}}
                 tabindex="1"
                 ref={(div) => {
                     this.appHolder = div;
                 }}
                 onKeyDown={e => this.keyboardHandler(e)}
                 onClick={this.clickHandler}>
                <AppHistory onRef={ref => (this.history = ref)}></AppHistory>
                <div className="row">
                    <div className="column column1">
                        <div className="row row1">
                            <button></button>
                            <button>C</button>
                            <button>Del</button>
                        </div>
                        <div className="row row1">
                            <button>7</button>
                            <button>8</button>
                            <button>9</button>
                        </div>
                        <div className="row row2">
                            <button>4</button>
                            <button>5</button>
                            <button>6</button>
                        </div>
                        <div className="row row3">
                            <button>1</button>
                            <button>2</button>
                            <button>3</button>
                        </div>
                        <div className="row row4">
                            <button></button>
                            <button>0</button>
                            <button>.</button>
                        </div>
                    </div>
                    <div className="column column2">
                        <button>/</button>
                        <button>*</button>
                        <button>-</button>
                        <button>+</button>
                        <button>=</button>
                    </div>
                </div>
            </div>
        );
    }

    keyboardHandler(event) {
        event = event || window.event;
        if (!event || 'object' !== typeof event) return false;
        if (event.altKey || event.ctrlKey) return;
        var keyCode = event.which || event.keyCode || event.charCode;
        console.log("key", event.key, keyCode);
        if (keyCode === null || keyCode === undefined) return false;
        let isShift = !!event.shiftKey;
        let value = this.keyCodes.getValue(keyCode, isShift);
        if (value) this.valueHandler(value)


    }

    clickHandler(event) {
        if (event.target.tagName !== "BUTTON") return;
        let value = event.target.innerText;
        console.log(value);
        this.valueHandler(value)
    }

    valueHandler(value) {
        if (!value) return;
        if (value === "=") this.history.addEqual(value);
        else if (value === "C") this.history.clear();
        else if (value === "Del") this.history.del();
        else if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."].includes(value)) this.history.addNumber(value);
        else this.history.addOperator(value);
    }

    componentDidMount() {
        this.appHolder.focus();
    }
}

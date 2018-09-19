export class AppKeyCodes {
    delete = 46;
    equal = [187, 13];

    isEqual(keyCode, shift) {
        if (shift) return false;
        return this.equal.includes(keyCode);
    }

    numbers = [
        {value: "0", "false": 48, "true": -1},
        {value: "0", "false": 96, "true": -1},
        {value: "1", "false": 49, "true": -1},
        {value: "1", "false": 97, "true": -1},
        {value: "2", "false": 50, "true": -1},
        {value: "2", "false": 98, "true": -1},
        {value: "3", "false": 51, "true": -1},
        {value: "3", "false": 99, "true": -1},
        {value: "4", "false": 52, "true": -1},
        {value: "4", "false": 100, "true": -1},
        {value: "5", "false": 53, "true": -1},
        {value: "5", "false": 101, "true": -1},
        {value: "6", "false": 54, "true": -1},
        {value: "6", "false": 102, "true": -1},
        {value: "7", "false": 55, "true": -1},
        {value: "7", "false": 103, "true": -1},
        {value: "8", "false": 56, "true": -1},
        {value: "8", "false": 104, "true": -1},
        {value: "9", "false": 57, "true": -1},
        {value: "9", "false": 105, "true": -1},
        {value: '.', "false": 110, "true": 190},
        {value: '=', "false": 187, "true": -1},
        {value: '=', "false": 13, "true": -1},
        {value: "*", "false": 42, "true": -1},
        {value: "*", "false": 106, "true": 56},
        {value: "+", "false": 107, "true": 187},
        {value: "+", "false": 43, "true": -1},
        {value: "-", "false": 109, "true": 189},
        {value: "-", "false": 45, "true": -1},
        {value: "/", "false": 191, "true": -1},
        {value: "/", "false": 111, "true": -1},
        {value: "C", "false": 67, "true": -1},
        {value: "Del", "false": 46, "true": -1}
        {value: "Del", "false": 8, "true": -1}
    ];

    getValue(keyCode, shift) {
        let value = null;
        this.numbers.forEach(item => {
            if (item[shift.toString()] === keyCode) {
                value = item.value;
                return false
            }
        });
        console.log("value for ", keyCode, shift, value);
        return value;
    }

    testShift(name, keyCode, shift) {
        return this[name][shift.toString()] === keyCode;
    }

}

function lastIndexOf(str: string, searchValue: string, fromIndex?: number): number {
    if (fromIndex === undefined) {
        fromIndex = str.length - 1;
    }
    for (let i = fromIndex; i >= 0; i--) {
        if (str.substr(i, searchValue.length) === searchValue) {
            return i;
        }
    }
    return -1;
}

function startsWith(str: string, searchValue: string, position?: number): boolean {
    if (position === undefined) {
        position = 0;
    }
    return str.substr(position, searchValue.length) === searchValue;
}

function endsWith(str: string, searchValue: string, position?: number): boolean {
    if (position === undefined || position > str.length) {
        position = str.length;
    }
    return str.substr(position - searchValue.length, searchValue.length) === searchValue;
}

function repeat(str: string, count: number): string {
    let result = '';
    for (let i = 0; i < count; i++) {
        result += str;
    }
    return result;
}

//% color="#F24848" icon="\uf067" weight=30 block="Utilities"
//% groups=['Booleans', 'Text', 'JSON']
namespace storage {
    //% block="if $bool then $value1 else $value2"
    //% blockId="if_then_else"
    //% group='Booleans'
    //% weight=5
    //% bool.defl=true
    //% value1.shadow="text"
    //% value1.defl="True!"
    //% value2.shadow="text"
    //% value2.defl="False!"
    export function ifThenElse(bool: boolean, value1: any, value2: any): any {
        if (bool) {
            return value1;
        } else {
            return value2;
        }
    }

    //% block="multiply $text by $amount"
    //% blockId="multiply_string"
    //% group='Text'
    //% weight=4
    //% text.defl="Hey! "
    //% amount.defl=5
    export function multiplyString(text: string, amount: number): any {
        return repeat(text, amount);
    }

    //% block="$text starts with $search?"
    //% blockId="starts_with"
    //% group='Text'
    //% weight=3
    //% text.defl="Hello World!"
    //% search.defl="Hello"
    export function startsWith(text: string, search: string): boolean {
        return startsWith(text, search);
    }

    //% block="$text ends with $search?"
    //% blockId="ends_width"
    //% group='Text'
    //% weight=2
    //% text.defl="Hello World!"
    //% search.defl="World!"
    export function endsWith(text: string, search: string): boolean {
        return endsWith(text, search);
    }

    //% block="$item to JSON"
    //% blockId="to_json"
    //% group='JSON'
    //% weight=1
    export function toJSON(item: any): string {
        return JSON.stringify(item);
    }

    //% block="JSON $json to object"
    //% blockId="from_json"
    //% group='JSON'
    //% weight=0
    //% json.defl="['Hello', 'World!']"
    export function fromJSON(json: string): any {
        return JSON.parse(json);
    }
}
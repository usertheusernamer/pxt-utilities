interface String {
    repeat(count: number): string;
    startsWith(searchString: string, endPosition?: number): boolean;
    endsWith(searchString: string, endPosition?: number): boolean;
}

//% color="#F24848" icon="\uf067" weight=30 block="Utilities"
//% groups=['Exceptions', 'Booleans', 'Text', 'JSON']
namespace storage {
    //% block="try"
    //% blockId="try_code"
    //% group='Exceptions'
    //% weight=6
    export function tryCode(code: () => void): void {
        try {
            code();
        } catch { }
    }

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
        return text.repeat(amount);
    }

    //% block="$text starts with $search?"
    //% blockId="starts_with"
    //% group='Text'
    //% weight=3
    //% text.defl="Hello World!"
    //% search.defl="Hello"
    export function startsWith(text: string, search: string): boolean {
        return text.startsWith(search);
    }

    //% block="$text ends with $search?"
    //% blockId="ends_width"
    //% group='Text'
    //% weight=2
    //% text.defl="Hello World!"
    //% search.defl="World!"
    export function endsWith(text: string, search: string): boolean {
        return text.endsWith(search);
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
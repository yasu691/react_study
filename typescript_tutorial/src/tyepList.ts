/** TypeScriptの基本の型 */
export {};

// boolean
const bool: boolean = true;

// number
const num: number = 0;

// string
const str: string = "";

// Array
const arr1: Array<number> = [0,1];
const arr2: number[] = [0,1];

// tuple
const tuple: [number, string] = [0,""];

// any
const any1: any = false;

// void
const func1 = ():void => {
    const test = "TEST";
}

// null
const null1: null = null;

// undefined
const undedined1: undefined = undefined;

// object
const obj1: object = {};
const obj2: { id: number, name: string } = {id: 0, name: "A"};

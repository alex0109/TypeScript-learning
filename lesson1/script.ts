let num: number = 1;

let str: string = "string";

let bool: boolean = true;

let arr: number[] = [1, 2, 3, 4, 5]; //массив только из цифр

let arr1: Array<number> = [1, 2, 3, 4, 5]; //массив типа Generic

let arr2: string[] = ["str", "str1", "str2"] //массив только из строк

// Tuple
let arr3: [any, any] = [1, "str"]; //массив ТОЛЬКО ИЗ ДВУХ любых переменных
// let array3: [string, number] = ["str", 1]; //массив ТОЛЬКО ИЗ строки и цифры

// Any
let varbl: any = 10;
varbl = "str";
varbl = [1, 2, 3];
varbl = false;
//lesson 1 Start
// const button = document.querySelector("button");
// const input1 = document.getElementById('num1')! as HTMLInputElement;
// const input2 = document.getElementById('num2')! as HTMLInputElement;

// function add(num1: number, num2: number) {
//     return num1 + num2
// }

// button?.addEventListener('click', function() {
//     console.log(add(+input1.value, +input2.value))
// })

//lesson 2 Types
let age: number = 50;
let newName: string = 'max';
let toggle: boolean = true;
let empy: null = null;
let notInitialize: undefined = undefined;
let callback = (num: number) => {
    return 100 + num;
}

let anything: any = -20;
anything = 'Test';
anything = {};

let some: unknown;
some = 'Text';

let str: string;
if (typeof some === 'string') {
str=some;    
}

let person: [string, number];
person = ['Max', 29];

enum Progress { LOADING, READY };

const page = {
    progress: Progress.READY
}

if (page.progress === Progress.LOADING) {
    console.log('Page is loading')
}
if (page.progress === Progress.READY) {
    console.log('Page is ready')
}

let double: string | number;
let choise: 'Yes!' | 'No!';

const showMessage = (messege:string):void => {
    console.log(messege);    
}
const calc = (num1: number, num2: number):number => {
    return num1 + num2
}
const customError = ():never => {
    throw new Error('Error')
}

type Page = {
    title: string,
    likes: number,
    accounts: string[],
    status: string,
    details?: {
        createAt: string,
        updateAt: string
    }
}

const page1: Page = {
     title: 'Hello first',
    likes: 100,
    accounts: ["Bla1","Bla2","Bla3"],
    status: 'open',
    details: {
        createAt: '2021-01-01',
        updateAt: '2021-05-01'
    }
}

const page2: Page = {
     title: 'Hello first',
    likes: 100,
    accounts: ["Bla1","Bla2","Bla3"],
    status: 'open',
}
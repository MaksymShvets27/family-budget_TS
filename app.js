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
var age = 50;
var newName = 'max';
var toggle = true;
var empy = null;
var notInitialize = undefined;
var callback = function (num) {
    return 100 + num;
};
var anything = -20;
anything = 'Test';
anything = {};
var some;
some = 'Text';
var str;
if (typeof some === 'string') {
    str = some;
}
var person;
person = ['Max', 29];
var Progress;
(function (Progress) {
    Progress[Progress["LOADING"] = 0] = "LOADING";
    Progress[Progress["READY"] = 1] = "READY";
})(Progress || (Progress = {}));
;
var page = {
    progress: Progress.READY
};
if (page.progress === Progress.LOADING) {
    console.log('Page is loading');
}
if (page.progress === Progress.READY) {
    console.log('Page is ready');
}
var double;
var choise;
var showMessage = function (messege) {
    console.log(messege);
};
var calc = function (num1, num2) {
    return num1 + num2;
};
var customError = function () {
    throw new Error('Error');
};
var page1 = {
    title: 'Hello first',
    likes: 100,
    accounts: ["Bla1", "Bla2", "Bla3"],
    status: 'open',
    details: {
        createAt: '2021-01-01',
        updateAt: '2021-05-01'
    }
};
var page2 = {
    title: 'Hello first',
    likes: 100,
    accounts: ["Bla1", "Bla2", "Bla3"],
    status: 'open',
};

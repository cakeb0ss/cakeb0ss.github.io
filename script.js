const doc = document;
const body = doc.body;
let main = doc.getElementById('main');
const mainTemps = doc.getElementsByTagName('template');

let contentDiv = doc.getElementById('content');


mainDict = Object.entries(mainTemps);
let elems = [];

function getElems(elems) {
    for (i=0; i < mainDict.length; i++) {
        eval(`
        let elem${i} = mainDict[${i}];
        elems.push(elem${i});
        `);
    }
    return elems;
}

getElems(elems);
console.table(elems);

let header, content, regCounter;
header = elems[0][1].innerHTML;
content = elems[1][1].innerHTML;
regCounter = elems[2][1].innerHTML;



for (let i=0;i < elems.length; i++) {
    console.log(elems[i]);
}

console.log(header);
console.log(content);
console.log(regCounter);



function pageLoad () {

    main.innerHTML = '';
    main.innerHTML += header;
    main.innerHTML += content;

}

doc.onload = pageLoad();


function counter() {

    console.log(regCounter);
    main.innerHTML = '';
    main.innerHTML += header;
    main.innerHTML += regCounter;

}

let total = 0;
let dep = 0;

function sum(array) {
    array.forEach(function(val) {
        total += val;
    })
    console.log(sum);
    return total;
}

function counterCompute() {
    let p = doc.getElementById('pennies').value * 0.01;
    let n = doc.getElementById('nickels').value * 0.05;
    let d = doc.getElementById('dimes').value * 0.10;
    let q = doc.getElementById('qs').value * 0.25;
    let ones = doc.getElementById('ones').value * 1;
    let fives = doc.getElementById('five').value * 5;
    let tens = doc.getElementById('ten').value * 10;
    let $_20s = doc.getElementById('twen').value * 20;
    let $_50s = doc.getElementById('fift').value * 50;
    let $_100s = doc.getElementById('hund').value * 100;
    let PRs = doc.getElementById('prs').value * 0.50;
    let NRs = doc.getElementById('nrs').value * 2;
    let DRs = doc.getElementById('drs').value * 5;
    let QRs = doc.getElementById('qrs').value * 10;


    let denomsList = [p, n, d, q, ones, fives, tens, $_20s, $_50s, $_100s, PRs, NRs, DRs, QRs];
    total = 0;
    total = sum(denomsList);
    dep = 0;
    dep = total - 400.00;
    if (dep < 0) {
        dep = 0;
    }

    console.log(total, dep)
    let totalDiv = doc.getElementById('total');
    let depDiv = doc.getElementById('deposit');
    totalDiv.innerHTML = `Total: $${total.toFixed(2)}`;
    depDiv.innerHTML = `Deposit: $${dep.toFixed(2)}`;
}

function clearInputs() {
    let inputs = doc.getElementsByTagName('input');
    let inpDict = Object.entries(inputs);
    console.table(inpDict);
    for (i=0; i < inpDict.length; i++) {
        inpDict[i][1].value = '';
    }
    counterCompute();
}

let regNum = 0;

function addReg() {
    regNum++;
    let submit = doc.getElementById('submitBox');
    let subText = `<div><h1>Reg.${regNum}</h1><p>Total: $${total.toFixed(2)}<br>Deposit: $${dep.toFixed(2)}</p></div>`
    submit.innerHTML += subText;
}
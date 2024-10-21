// import {main} from "./main.js"

let x, y;

x = window.innerWidth;
y = window.innerHeight;


function rnd(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function rndRGB() {
  let rndColor = `rgba(${rnd(100,180)}, ${rnd(30,30)}, ${rnd(50,200)}, 0.8)`;
  return rndColor
}

let c1, c2, c3, c4, c5, c6;
  function changeColors() {
  c1 = rndRGB();
  c2 = rndRGB();
  c3 = rndRGB();
  c4 = rndRGB();
  c5 = rndRGB();
  c6 = rndRGB();
  }
changeColors()
setInterval(changeColors, 2000)

function setup() {
  let canv = createCanvas(x, y);
  canv.parent('main');
}

let d = y / 2;
let r = y / 4;

let x0 = x / 2
let y0 = y / 2

let r2 = (y*0.809) / 2
let r0 = (y*1.308) / 2

function draw() {

  let angle = frameCount * 0.1;
  let rSin = r * Math.sin(angle)
  let rSinh = r * Math.sinh(angle)
  let rCos = r * Math.cos(angle)
  let rTan = r * Math.tan(angle)
  
  
  applyMatrix(1, 0, 0, 1, x0, y0);
  // rotate(Math.cosh(-1*angle));
  // noCursor()
  cursor(CROSS)
  frameRate(24)

  // fill(`${c6}`);
  // circle(`${mouseX - x0}`, `${mouseY - y0}`, r / 2)
  
  // stroke(`${c2}`)


  // stroke(`${c1}`)
  strokeWeight(1)
  fill(`${c6}`);
  // noFill()
  stroke('black')
  // noStroke()

  translate(-1 * rSin, rCos)
  // rotate(rSin);
  circle(0, 0, rCos)

  // stroke('cyan')
  translate(rSin, rCos * -1)
  fill(`${c2}`);
  circle(0, 0, rSin)
  
  filter(ERODE)
}
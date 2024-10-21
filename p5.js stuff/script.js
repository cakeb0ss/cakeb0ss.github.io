import {main} from './main.js'

let x, y;

x = window.innerWidth;
y = window.innerHeight;

const mainStyle = {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0',
    padding: '0',
    overflow: 'hidden',
    fontFamily: 'Silkscreen',
    color: 'white',
    height: '100vh',
    width: '100vw',
    backgroundColor: 'black'
}

let container = main.init(mainStyle);
let mainDiv = document.getElementById('main');
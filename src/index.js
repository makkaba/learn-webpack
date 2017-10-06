import _ from 'lodash';
import Block from './style.css';
import printMe from './print.js';


function component(){
    var element = document.createElement('div');
    var btn = document.createElement('button');
    
    
    element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
    element.classList.add('hello');
    
    
    btn.innerHTML = 'click me';
    btn.onclick = printMe;
    
    element.appendChild(btn);
    
    return element;
}

document.body.appendChild(component());
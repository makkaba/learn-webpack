import _ from 'lodash';
import Block from './style.css';
import './block.png';

function component(){
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
    element.classList.add('hello');
    var myImg = new Image();
    myImg.src = Block;
    element.appendChild(myImg);
    return element;
}

document.body.appendChild(component());
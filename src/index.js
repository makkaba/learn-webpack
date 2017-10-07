import _ from 'lodash';
import printMe from './print.js';

if(process.env.NODE_ENV !== 'production'){
    console.log('this is dev mode');
}

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

if(module.hot){
    module.hot.accept('./print.js', function(){
        console.log('module hot accept print.js');
        printMe();
    })
}
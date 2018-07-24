// console.log('hello webpack yo, in real time!');
//
// var message = 'some random text';
//
// function hello(){
//     var message = "hello yo";
//     console.log(message);
// }
//
// function greeting(){
//     console.log('this is before the new assignment ', message);
//     var message = "yo hoho";
//     console.log(message);
// }
//
// hello();
// greeting();

import React from 'react';
import ReactDOM from 'react-dom';

import Global from './components/Global'

ReactDOM.render(
    <Global/>, document.getElementById('root')
);



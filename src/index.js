'use strict';

import _ from 'lodash';
import './style.css'
import logosvg from './logo.svg'

function component() {
  var element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  element.classList.add('hello');

  var mysvg = new Image();
  mysvg.src = logosvg;

  element.appendChild(mysvg);

  return element;
}

document.body.appendChild(component());
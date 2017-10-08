'use strict'

import { cube } from './math.js'

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!')
} else {
  console.log('propropro')
}


function component() {
  const element = document.createElement('pre')

  element.innerHTML = [
    'Hello Webpack !',
    '5 cubed is equel to ' + cube(5)
  ].join('\n\n')
  return element
}


const element = component()
document.body.appendChild(element)

const makeJscad = require('./src/index')

const rootEl = document.createElement('div')
document.body.appendChild(rootEl)
rootEl.className = 'wrapper'

//
const el1 = document.createElement('div')
el1.className = 'jscad1'
const jscadInst1 = makeJscad(el1, {name: 'jscad1'})
rootEl.appendChild(el1)

//
const el2 = document.createElement('div')
el2.className = 'jscad2'
const jscadInst2 = makeJscad(el2, {name: 'jscad2'})
rootEl.appendChild(el2)

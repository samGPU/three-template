
import Experience from './Experience/Experience.js'
import State from './Experience/Utils/State.js'

const state = new State('LOADING')

const experience = new Experience(document.querySelector('canvas.webgl'))

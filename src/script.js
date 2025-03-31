/* eslint-disable no-unused-vars */
import State from './Experience/Utils/State.js'
import StartScreen from './UI/StartScreen.js'
import Experience from './Experience/Experience.js'

const state = new State('LOADING')
const startScreen = new StartScreen();
const experience = new Experience(document.querySelector('canvas.webgl'))

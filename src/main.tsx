import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {Form} from "react-bootstrap";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

const konamiCode = "wahey".split("")
let positionInCode = 0;

const unkonamiCode = "yehaw".split("")
let positionInUnCode = 0;

function executeKonamiCode() {
    let header = document.getElementById("header");
    if (header) header.textContent = "WAHEY"
}

function executeUnKonamiCode() {
    let header = document.getElementById('header')
    if (header) header.textContent = "What's in your fridge?"
}

function checkKonamiCode(key: string) {
    if (konamiCode[positionInCode++] !== key) {
        positionInCode = 0
    }
    if (positionInCode === 5) executeKonamiCode()
}

function checkUnKonamiCode(key: string) {
    if (unkonamiCode[positionInUnCode++] !== key) {
        positionInUnCode = 0
    }
    if (positionInUnCode === 5) executeUnKonamiCode()
}

document.addEventListener('keypress', function(event) {
    checkKonamiCode(event.key)
    checkUnKonamiCode(event.key)
})
"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

backColor();

function backColor() {
    context.beginPath();
    context.fillRect(50, 50, 400, 400);
}

/* kopje */
context.fillStyle = '#8BFF00';
context.beginPath();
context.fillRect(220, 75, 75, 75);

/* Linkse vorm (J) */
context.beginPath();
context.fillRect(160, 280, 70, 140);
context.fillRect(70, 350, 160, 70);

/* Rechste vorm (L) */

/* context.beginPath();
context.moveTo(280, 250);
context.lineTo(280, 420);
context.lineTo(430, 420);
context.lineTo(430, 350);
context.lineTo(350, 350);
context.lineTo(350, 250);
context.fill();
context.stroke(); */

/* Rechste vorm (L) ((2de idee)) */
context.beginPath();
context.strokeStyle = '#8BFF00';
context.lineWidth = '70';
context.moveTo(300, 280);
context.lineTo(300, 385);
context.lineTo(430, 385);
context.stroke();
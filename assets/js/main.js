

let body = document.getElementById('body');

function generate() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    console.log(r);
    console.log(g);
    console.log(b);
    document.body.style.background = 'rgb(' + r + ',' + g + ',' + b + ')';
}
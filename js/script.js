function randomText(){
    var text = ("abcdefghijklmnopqrstuvwxyz0123456789");
    letter = text[Math.floor(Math.random() * text.length)];
    return letter;
}



function chuva(){
let nuvem = document.querySelector('.nuvem');
let e = document.createElement('div');
let left = Math.floor(Math.random() * 310);
let size = Math.random() * 1.5;
let duracao = Math.random() * 1;

e.classList.add('text');
nuvem.appendChild(e);
e.innerHTML = randomText()
e.style.left = left + 'px';
e.style.fontSize= 0.5+size+'em';
e.style.animationDuration = 1+duracao +'s'
setTimeout(()=>{
    nuvem.removeChild(e)
},2000)
}

setInterval(() =>{
    chuva()
},20);
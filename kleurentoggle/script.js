//1 MENU VERSCHIJNT EN VERDWIJNT

const toggleBtn = document.querySelector('#toggle-btn');
const menu = document.getElementById('#dropdown-menu');

const toggle = function(){
    const element = document.getElementById('dropdown-menu');
    element.classList.toggle('visible');
};

toggleBtn.addEventListener('click', toggle);

//2 KLEUR VERANDEREN VAN ACHTERGROND

const rood = document.querySelector('#rood');

let toggleColor = function(){
    document.getElementById('body').className = "rood";
    document.getElementById('dropdown-menu').className = "hidden";
    document.getElementById('kleur').innerHTML = "Red";  
};

rood.addEventListener('click', toggleColor);


const oranje = document.querySelector('#oranje');

toggleColor = function(){
    document.getElementById('body').className = "oranje";
    document.getElementById('dropdown-menu').className = "hidden";
    document.getElementById('kleur').innerHTML = "Orange"; 
};

oranje.addEventListener('click', toggleColor);


const geel = document.querySelector('#geel');

toggleColor = function(){
    document.getElementById('body').className = "geel";
    document.getElementById('dropdown-menu').className = "hidden";
    document.getElementById('kleur').innerHTML = "Yellow"; 
};

geel.addEventListener('click', toggleColor);

const groen = document.querySelector('#groen');

toggleColor = function(){
    document.getElementById('body').className = "groen";
    document.getElementById('dropdown-menu').className = "hidden";
    document.getElementById('kleur').innerHTML = "Green"; 
};

groen.addEventListener('click', toggleColor);

const blauw = document.querySelector('#blauw');

toggleColor = function(){
    document.getElementById('body').className = "blauw";
    document.getElementById('dropdown-menu').className = "hidden";
    document.getElementById('kleur').innerHTML = "Blue"; 
};

blauw.addEventListener('click', toggleColor);

const paars = document.querySelector('#paars');

toggleColor = function(){
    document.getElementById('body').className = "paars";
    document.getElementById('dropdown-menu').className = "hidden";
    document.getElementById('kleur').innerHTML = "Purple"; 
};

paars.addEventListener('click', toggleColor);



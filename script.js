/* =========================
   LOADING
========================= */

window.onload=function(){

setTimeout(function(){

document.getElementById("loader").style.opacity="0";

setTimeout(function(){

document.getElementById("loader").style.display="none";

},700);

},1800);

}
/*================ COUNTER =================*/

const counters=document.querySelectorAll(".counter");

const startCounter=()=>{

counters.forEach(counter=>{

const target=+counter.dataset.target;

let count=0;

const update=()=>{

const increment=Math.ceil(target/80);

count+=increment;

if(count<target){

counter.innerText=count;

requestAnimationFrame(update);

}else{

counter.innerText=target;

}

};

update();

});

};

window.addEventListener("load",startCounter);

const stage = document.querySelector('.stage');
const pole = document.querySelector('.pole');
// const pics = document.querySelectorAll('.pic');
let poleDegree = 0;
const varDegree = 3;
let ori = false;

pole.addEventListener('mousemove', rotatePole);

window.addEventListener('mousedown', function(){
    return ori = true;
});
window.addEventListener('mouseup', function (){
    return ori = false;
});


function rotatePole(e){
    if (ori) {
        (e.movementX > 0) ? poleDegree += varDegree : poleDegree -= varDegree;
        pole.style.transform = `rotateY(${poleDegree}deg)`;
    }
}

/* pics.forEach((pic, index, pics) => {
	let angle = 360 / pics.length * index * 2;
  let pos = (angle < 360) ? dist : -dist; 
 	pic.style.transform = `rotateY(${angle}deg) translateZ(${pos}px)`;
}); */
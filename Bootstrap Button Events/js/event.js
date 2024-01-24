let btnOne = document.getElementById('click');
btnOne.addEventListener("click", function(e){
    e.target.style.background = "#a0b96b";
});

let btnTwo = document.getElementById('dblclick');
btnTwo.addEventListener('dblclick', function(e){
    e.target.style.border = "4px dotted #ec8f6a";
});

let btnThree = object.getElementById('onmouseover');
btnThree.addEventListener('mouseover', function(ev){
    ev.target.style.border = "green";
});

let btnFour = document.getElementById('onmouseup');
btnFour.addEventListener('mouseup', function(eve){
    eve.target.style.border = "blue";
});

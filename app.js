//here goes...
//blue cards onClick

// const =

let turn1=document.getElementById("back1");

let turn3 = document.getElementById("back3");

   turn1.addEventListener("click", showBlueCard);

    turn3.addEventListener("click", showBlueCard);

function showBlueCard(event){
event.target.style.backgroundColor = "blue";
event.target.innerHTML ="bl";
}

//green card onClick

let turn2 = document.getElementById("back2");

let turn4 = document.getElementById("back4");

    turn2.addEventListener("click", showGreenCard);

    turn4.addEventListener("click", showGreenCard);

function showGreenCard(event){
event.target.style.backgroundColor = "green";
event.target.innerHTML = "grn";
}



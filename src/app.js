//here goes...
//blue cards onClick

var back1Ref = document.getElementById("back1");

var back3Ref = document.getElementById("back3");

      back1Ref.addEventListener("click", revealBlueCard);

      back3Ref.addEventListener("click", revealBlueCard);

function revealBlueCard(event){
  event.target.style.backgroundColor = "blue";
  event.target.innerHTML ="bl";
}

//green card onClick

var back2Ref = document.getElementById("back2");

var back4Ref = document.getElementById("back4");

      back2Ref.addEventListener("click", revealGreenCard);

      back4Ref.addEventListener("click", revealGreenCard);

function revealGreenCard(event){
  event.target.style.backgroundColor = "green";
  event.target.innerHTML = "grn";
}


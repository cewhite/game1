 var patterns=["A","B","C"];
  var matchCard=2;
  var deck=[];
  var showingCard=[];
  var matched=0;


function resetGame(){
  deck=[];
  showingCard=[];
  matched=0;

  for(var i=0;i<matchCard;i++){
  for(var index in this.patterns){
    deck.push(patterns[index]);
  }
}

   deck = deck.sort(function(){
     return Math.random() - 0.5
   }
     )

for(var index in this.deck){
  var card = $("#tem > .card").clone();
  card.attr('data-card',deck[index]);
  $("#game").append(card);
}
}

function flipShowingCard(){
  setTimeout(function(){$(".card.show").removeClass('show')},800)
}

function checkMatch(){
  var firstCard=showingCard[0];
  for(var i=1;i<showingCard.length;i++){
    if(firstCard!==showingCard[i]){
      return false
    }
  }
  return true
}

function removeShowingCard(){
  setTimeout(function(){$(".card.show").fadeOut()},300);
  setTimeout(function(){$(".card.show").remove()},800);
}

function checkGameOver(){
  matched+=matchCard;
  if(matched>= patterns.length * matchCard){
    removeShowingCard();
    setTimeout(function(){resetGame()},1500);
  }else{
    removeShowingCard();
  }
}






$("#game").delegate(".card","click",function(){
    if((!($(this).is('.show')))&&($(".card.show").length < matchCard)){
    $(this).addClass('show');
      showingCard.push($(this).data("card"));
  }
    if($(".card.show").length>=matchCard){
    if(checkMatch()){
      checkGameOver();
      showingCard=[];
    }else{
      flipShowingCard();
      showingCard=[];
    }
  }
  console.log(showingCard);
})


resetGame();

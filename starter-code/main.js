console.log("JS file is connected to HTML! Woo!");
var cardOne="queen", cardTwo="queen", cardThree="king", cardFour="king";

/**if(cardOne === cardTwo){
	alert("You found a match!");
}
else{
	alert("Sorry, try again.");
}*/

var newGameBoard = document.getElementById('game-board');

var createCards = function(){
	for(var i = 0; i < 4; i++){
		var newCard = document.createElement('div');
		newCard.className = 'card';
		newGameBoard.appendChild(newCard);
	}
}
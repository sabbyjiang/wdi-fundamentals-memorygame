// // console.log("JS file is connected to HTML! Woo!");
// // var cardOne="queen", cardTwo="queen", cardThree="king", cardFour="king";

// var newGameBoard = document.getElementById('game-board');

// sets up card IDs
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

// Creates board
var board = document.getElementById('game-board');
function createBoard() {
	for (var i=0; i< cards.length; i++) {
		//Creates new div for each card
		var cardElement = document.createElement('div');
		//Gives each div class identifier as card
		cardElement.className = 'card';
		//Assigns card either Queen or King
		cardElement.setAttribute('data-card', cards[i]);
		//Gives on click event to "flip" the card over and show the face, then check if they are a match
		cardElement.addEventListener('click', isTwoCards);
		//Adds card to the board
		board.appendChild(cardElement);
	}
}

//Flips the card and starts function isMatch (for matching)
function isTwoCards() {
	// Pushes into cardsInPlay to hold what card is first clicked
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));

	//"Flips" over King or Queen face depending on the card clicked
	if (this.getAttribute('data-card') === 'king'){
		this.innerHTML = "<img src = 'king.png'>";
	} else {
		this.innerHTML = "<img src = 'queen.png'>";
	}

	//If the cards in play are 2, then will initiate matching function
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);

		cardsInPlay = [];
	}
}

// Checks for the matching of the two cards
function isMatch(cards) {
	if (cards[0] === cards[1]) {
		alert("You found a match!");
	}
	else{
		alert("Sorry, try again.");
	}
}

createBoard();
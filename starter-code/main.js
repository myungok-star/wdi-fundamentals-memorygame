//var cardOne = 'queen';
//var cardTwo = 'queen';
//var cardThree = 'king';
//var cardFour = 'king';

//if (cardOne === cardTwo) {
//	alert('You found a match!');	
//} else {
//  alert('Sorry, try again.');
//}

// find the board and set it to a variable
// so that we can add cards to it
var board = document.getElementById('game-board');	
// function that creates cards
var createCards = function() {
	// loop all 4 cards to create card elements for the board
	for (var i = 0; i < 4; i++) {
		//create a div element which will be used as a card
		var cardElement = document.createElement('div');
		// add a class the card elements 
		cardElement.className = 'card';
		// append the card element to the board
		board.appendChild(cardElement);
	}
}
createCards();



//represent the card of the game
var cards = ['queen', 'queen', 'king', 'king'];
//var cardOne = 'queen';
//var cardTwo = 'queen';
//var cardThree = 'king';
//var cardFour = 'king';

//if (cardOne === cardTwo) {
//	alert('You found a match!');	
//} else {
//  alert('Sorry, try again.');
//}
//represent the card in play
var cardsInPlay = [];

// find the board and set it to a variable
// so that we can add cards to it
var board = document.getElementById('game-board');	
// function that creates cards
var createCards = function() {
	// loop all 4 cards to create card elements for the board
	for (var i = 0; i< cards.length; i++) {
		//create a div element which will be used as a card
		var cardElement = document.createElement('div');
		// add a class the card elements 
		cardElement.className = 'card';
		// add an attribute to the card elements
		cardElement.setAttribute('data-card', cards[i]);
		 // when a card is clicked the function isTwoCards will be executed
		cardElement.addEventListener('click', isTwoCards);
		// append the card element to the board
		board.appendChild(cardElement);
	}
}
//checks to see if there are cards in play
var isTwoCards = function() {
	// add card to array of cards in play
  // 'this' hasn't been covered in this prework, but
  // for now, just know it gives you access to the card the user clicked on
  cardsInPlay.push(this.getAttribute('data-card'));
  


  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {
  	// pass the cardsInPlay as an argument to isMatch function
    isMatch(cardsInPlay);
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = '<img src = "k1.png">';
	} else {
		this.innerHTML = '<img src = "q1.png">';
	}

    // clear cards in play array for next try
    cardsInPlay = [];

  }
	 
  }

var isMatch = function(cards) {
	if (cards[0] === cards[1]) {
		alert('You found a match!');	
	} else {
		alert('Sorry, try again.');
	}
}
createCards();









var app = angular.module('my-app', []);


app.controller('MainController', function($scope) {

	$scope.playerScore = 0;
	$scope.computerScore = 0;

	$scope.playRock = function() {
		var computerTurn = getComputerPlay();
		console.log(determineWinner(computerTurn, 'rock'));
	};

	$scope.playPaper = function() {
		var computerTurn = getComputerPlay();
		console.log(determineWinner(computerTurn, 'paper'));
	};

	$scope.playScissors = function() {
		var computerTurn = getComputerPlay();
		console.log(determineWinner(computerTurn, 'scissors'));
	};

	function determineWinner(computer, player) {
		if (computer === player) {
			$scope.message = 'you tied!';
			return 'draw';
		} else if (computer === 'rock' && player === 'paper') {
			$scope.playerScore++;
			$scope.message = 'you won!';
			return player;
		} else if (computer === 'rock' && player === 'scissors') {
			$scope.computerScore++;
			$scope.message = 'you lost!';
			return computer;
		} else if (computer === 'paper' && player === 'rock') {
			$scope.computerScore++;
			$scope.message = 'you lost!';
			return computer;
		} else if (computer === 'paper' && player === 'scissors') {
			$scope.playerScore++;
			$scope.message = 'you won!';
			return player;
		} else if (computer === 'scissors' && player === 'paper') {
			$scope.computerScore++;
			$scope.message = 'you lost!';
			return computer;
		} else if (computer === 'scissors' && player === 'rock') {
			$scope.playerScore++;
			$scope.message = 'you won!';
			return player;
		}
	}

	function getComputerPlay() {
		var plays = ['rock', 'paper', 'scissors'];
		var play = plays[Math.floor(Math.random() * plays.length)];
		return play;
	}
});

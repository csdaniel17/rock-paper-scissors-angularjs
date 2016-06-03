var app = angular.module('my-app', []);


app.controller('MainController', function($scope) {
	$scope.playerScore = 0;
	$scope.computerScore = 0;

	$scope.playRock = function() {
		var computerTurn = getComputerPlay();
		if (computerTurn === 'rock') {
			$scope.message = 'you tied!';
		};
		if (computerTurn === 'paper') {
			$scope.message = 'you lost!';
			$scope.computerScore++;
		};
		if (computerTurn === 'scissors') {
			$scope.message = 'you won!';
			$scope.playerScore++;
		};
	};

	$scope.playPaper = function() {
		var computerTurn = getComputerPlay();
		if (computerTurn === 'paper') {
			$scope.message = 'you tied!';
		};
		if (computerTurn === 'rock') {
			$scope.message = 'you won!';
			$scope.playerScore++;
		};
		if (computerTurn === 'scissors') {
			$scope.message = 'you lost!';
			$scope.computerScore++;
		};
	};

	$scope.playScissors = function() {
		var computerTurn = getComputerPlay();
		if (computerTurn === 'scissors') {
			$scope.message = 'you tied!';
		};
		if (computerTurn === 'paper') {
			$scope.message = 'you won!';
			$scope.playerScore++;
		};
		if (computerTurn === 'rock') {
			$scope.message = 'you lost!';
			$scope.computerScore++;
		};
	};

	function getComputerPlay() {
		var plays = ['rock', 'paper', 'scissors'];
		var play = plays[Math.floor(Math.random() * plays.length)];
		console.log(play);
		return play;

	};

});

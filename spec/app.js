var app = angular.module("JogoVelha",[]);

app.controller("JogoVelhaCtrl", function ($scope) {
	
	var jogo = new JogoDaVelha();

	$scope.v = jogo.tabuleiro();

	$scope.jogador = "x";

	$scope.clique = function(posicao){

		jogo.marcar($scope.jogador ,posicao);
		$scope.vencedor = jogo.vencedor();

		if ($scope.jogador === "x") {
			$scope.jogador = "o";
		} else {
			$scope.jogador = "x";
		};

		$scope.v = jogo.tabuleiro();
	};

});
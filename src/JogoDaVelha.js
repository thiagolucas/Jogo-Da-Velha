function JogoDaVelha () {

	var tab = ["-","-","-","-","-","-","-","-","-"];
	var vencedor = undefined;

	this.posicao = function (pos) {
		return tab[pos];
	};

	this.tabuleiro = function () {
		return tab;
	};

	this.marcar = function (cont, pos) {
		if (tab[pos] === "-") {
			tab[pos] = cont;
			calculaVencedor();
		}
	};

	this.vencedor = function () {
		return vencedor;
	};

	function calculaVencedor () {
		//horizontal
		if ( (tab[0] === tab[1] && tab[1] === tab[2]) && ( tab[0] !== "-" && tab[1] !== "-" && tab[2] !== "-") ) {
			vencedor = tab[0];
		} else if( (tab[3] === tab[4] && tab[4] === tab[5]) && ( tab[3] !== "-" && tab[4] !== "-" && tab[5] !== "-") )  {
			vencedor = tab[3];
		} else if( (tab[6] === tab[7] && tab[7] === tab[8]) && ( tab[6] !== "-" && tab[7] !== "-" && tab[8] !== "-") ) {
			vencedor = tab[6];
		} 

		//vertical
		else if ( (tab[0] === tab[3] && tab[3] === tab[6]) && ( tab[0] !== "-" && tab[3] !== "-" && tab[6] !== "-") ) {
			vencedor = tab[0];
		} else if( (tab[1] === tab[4] && tab[4] === tab[7]) && ( tab[1] !== "-" && tab[4] !== "-" && tab[7] !== "-") ) {
			vencedor = tab[1];			
		} else if( (tab[2] === tab[5] && tab[5] === tab[8]) && ( tab[2] !== "-" && tab[5] !== "-" && tab[8] !== "-") ) {
			vencedor = tab[2];
		}

		//diagonal
		else if( (tab[0] === tab[4] && tab[4] === tab[8]) && ( tab[0] !== "-" && tab[4] !== "-" && tab[8] !== "-")) {
			vencedor = tab[0];
		} else if ( (tab[2] === tab[4] && tab[4] === tab[6]) && ( tab[2] !== "-" && tab[4] !== "-" && tab[6] !== "-")){
			vencedor = tab[2];
		}
	};
};
describe("Jogo da Velha", function () {
	describe("Jogo", function () {

		it("o tabuleiro deve ter 9 posicoes", function () {
			var jogo = new JogoDaVelha();

			expect(jogo.tabuleiro().length).toEqual(9);
		});

		it("deve retornar o conteudo de uma posicao do tabuleiro", function () {
			var jogo = new JogoDaVelha();
			var conteudo = jogo.posicao(2);

			expect(conteudo).toBeDefined();
		});

		it("deve receber um valor de X na posicao do meio", function () {
			var jogo = new JogoDaVelha();
			jogo.marcar("x", 5);

			expect(jogo.posicao(5)).toEqual("x");
		});

		it("nao pode aceitar um conteudo em um campo ja marcado", function () {
			var jogo = new JogoDaVelha();
			jogo.marcar("x", 5);
			jogo.marcar("o", 5);

			expect(jogo.posicao(5)).toEqual("x");
		});

		it("deve responder que X eh vencedor se X completar uma linha na horizontal", function () {
			var jogo = new JogoDaVelha();

			jogo.marcar("x",0);
			jogo.marcar("x",1);
			jogo.marcar("x",2);

			expect(jogo.vencedor()).toEqual("x");

		});

		it("deve responder que O eh o vencedor se O marcar uma linha na horizontal", function () {
			var jogo = new JogoDaVelha();

			jogo.marcar("o",1);
			jogo.marcar("o",4);
			jogo.marcar("o",7);

			expect(jogo.vencedor()).toEqual("o");
		});

		it("deve responder que X eh o vencedor se X fizer uma linha na diagonal", function () {
			var jogo = new JogoDaVelha();

			jogo.marcar("x",0);
			jogo.marcar("x",4);
			jogo.marcar("x",8);

			expect(jogo.vencedor()).toEqual("x");
		});
	});

});
var altura = 0
var largura = 0
var vidas = 1
var tempo = 11
var criaMoscaTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?' , '')

if(nivel === 'Normal'){
	//1500
	criaMoscaTempo = 1500
}else if(nivel === 'Hard'){
	//1000
	criaMoscaTempo = 1000
}else if (nivel === 'ChuckNorris'){
	//750
	criaMoscaTempo = 750
}

function ajustaTamanhoPalcoJogo() {
	 altura = window.innerHeight //Comando para mostar em numeros a altura da pagina
	 largura = window.innerWidth


	console.log(altura, largura)
}

ajustaTamanhoPalcoJogo()


var cronometro =  setInterval(function() {


	
	tempo -= 1

	if(tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criaMosca)
		window.location.href = 'vitoria.html'
	} else {
		document.getElementById('cronometro').innerHTML = tempo
	}

},1000)

function posicaoRandomica() {

	//remover o mosquito anterior (caso exista)
	if(document.getElementById('mosca')) {
		 document.getElementById('mosca').remove()

		 //console.log('Elementeo selecionado foi: v' + vidas)

		 if (vidas > 3) {

		 	window.location.href = 'fim_de_jogo.html'
		 } else{
		 	document.getElementById('v' + vidas).src="img/coracao_vazio.png"

		 	vidas++
		 }
	}
	var posicaoX = Math.floor(Math.random() * largura) - 90 // Math.floor: comando para tirar algumas casas decimais do camando Math.random
	var posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX  // operador ternario
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)


	// criar o elemento html
	var mosca = document.createElement('img')
	mosca.src = 'img/mosca.png'
	mosca.className = tamanhoAleatorio() + ' ' +ladoAleatorio() // comando para buscar e adicionar variaveis dentro de uma function
	mosca.style.left = posicaoX + 'px'
	mosca.style.top = posicaoY + 'px'
	mosca.style.position = 'absolute'
	mosca.id ='mosca'
	mosca.onclick = function(){
		this.remove()
	}


	document.body.appendChild(mosca) 
 

		
}

function tamanhoAleatorio() {
	var classe = Math.floor(Math.random() * 3)

	switch(classe){
		case 0: 
			return 'mosca1'

		case 1: 
		 	return 'mosca2'

		case 2: 
			return 'mosca3'
	}
}

function ladoAleatorio(){

	var classe = Math.floor(Math.random() * 2)
	

	switch(classe) {
		case 0: 
			return 'ladoA'

		case 1: 
		 	return 'ladoB'

		
	}
}


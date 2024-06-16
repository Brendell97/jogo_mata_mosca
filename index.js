//descobrir as dimensões da página
var altura_pagina = 0;
var largura_pagina = 0;
// vai contar as vidas do jogagor
var contador = 0
var time = 11
velocidade_do_jogo = 1500
var dificuldade =  window.location.search
dificuldade  = dificuldade.replace('?','')
if (dificuldade == 1){
    velocidade_do_jogo = 1500
}
else if (dificuldade == 2){
    velocidade_do_jogo = 1000
}
else if(dificuldade == 3){
    velocidade_do_jogo = 750
}


// função para descobrir as dimensões da página
function tamanhoPagina(){
    altura_pagina = window.innerHeight ;
    largura_pagina = window.innerWidth;
}
// chama a função para registrar os valores da página
tamanhoPagina()



var cronometro = setInterval (function() {
    time -= 1
    if(time < 0) {
        //faz para o loop  da função 
        clearInterval(cronometro)
        clearInterval(cria_mosquito)
        window.location.href = 'vitoria.html'
    }
    else{
          document.getElementById('cronometro').innerHTML = time;
      }
    },1000)


//função principal
function posicaoMosquito(){
    console.log("passou aqui")
    validaMosquito()

    //declara a posição de x e y
    // Math.flor arredonda para baixo e o random gera um numero aletório
    var posicao_x = Math.floor(Math.random() * largura_pagina ) - 120;
    var posicao_y = Math.floor(Math.random() * altura_pagina)- 120;
    // valida se ele não ficara negativo
    posicao_x = posicao_x < 0 ? 0 : posicao_x
    posicao_y = posicao_y < 0 ? 0 : posicao_y;

    // criar um elemento IMG
    var mosquito = document.createElement('img')
    //pois coloca o complemento src e a classe
    mosquito.src =  "imagens/mosca.png";
    mosquito.className = (tamanhoAleatorio()+' '+ladoAleatorio()) ;
    //posiciona o elemento
    mosquito.style.left = posicao_x + "px";
    mosquito.style.top = posicao_y + "px";
    mosquito.style.position = "absolute";
    //cria o elemento no body
    document.body.appendChild(mosquito); 
    mosquito.id = 'mosquito';
    mosquito.onclick = function(){
        this.remove();
        
    }
}
//cria o tamamnho aleatório
function tamanhoAleatorio(){
    classe  = Math.floor(Math.random() * 3);
    switch (classe){
        case 0:
            return "mosquito1";
        case 1:
            return "mosquito2";
        case 2:
            return "mosquito3";
    }
}
//cria o lado da imagem
function ladoAleatorio(){
    classe  = Math.floor(Math.random() * 2);
    switch (classe){
        case 0:
            return "ladoA";
        case 1:
            return "ladoB";

    }
}

function velocidade(){
    var tempo = velocidade_do_jogo // 1000// velocidade_do_jogo;
    return tempo
}    


// Essa função validada se existe mosquito na tela controla o decremento das vidas
function validaMosquito(){
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
        contador ++
        if(contador == 1){
            var v1 = document.getElementById('v1')
            v1.src = 'imagens/coracao_vazio.png'
        }
        else if(contador == 2){
            var v2 = document.getElementById('v2')
            v2.src = 'imagens/coracao_vazio.png'
        }
        else if(contador == 3){
            var v3 = document.getElementById('v3')
            v3.src = 'imagens/coracao_vazio.png'
            window.location.href = 'fim_de_jogo.html'
        }
    }
}
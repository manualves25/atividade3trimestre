 const botoes = document.querySelectorAll(".botao"); 
 const textos = document.querySelectorAll(".aba-conteudo");
 for (let i = 0; i < botoes.length; i++) { 
   botoes[i].onclick= function () { 
       for (let j = 0; j < botoes.length; j++) { 
           botoes [j].classList.remove ("ativo"); 
           botoes [j]. classList.remove ("ativo");
       }
       botoes [i].classList.add("ativo"); 
       textos [i].classList.add("ativo"); 
   } 
 } 
 const contadores = document.querySelectorAl(".contador");
 const tempoObjetivo1 = new Date("ANO-MES-DIATO O:OO:OO");
 const tempoObjetivo2 = new Date("ANO-MES-DIATO O:OO:OO");
 const tempoObjetivo3 = new Date("ANO-MES-DIATO O:OO:OO");
 const tempoObjetivo4 = new Date("ANO-MES-DIATO O:OO:OO");
 
 const tempos = [tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4];

 function calculaTempo(tempoObjetivo){
     let tempoAtual = new Date();
     let tempoFinal = tempoObjetivo - tempoAtal;
     let segundos = Mathu.floor(tempoFinal / 1000);
     let minutos = Math.floor(segrundos / 60);
     let horas = Math.floor(minutos / 60);
     let dias = Math.floor(horas / 24)

     segundos %= 60;
     minutos  %= 60;
     horas    %= 24;
     if (tempoFinal > O) {
         return dias + "dias" + horas + "horas" + minutos + "minutos" + segundos + "segundos";
     } else {
         return "prazo Finalizado";
  }
 }
 function atualizaCronometro() {
      for (let i = 0; i < contadores.length; i++) {
          contadores[i]. textContent = calculaTempo(tempos[i]);
     }        
 }
 function comecaCronometro() {
     atualizaCronometro();
     setInterval (atualizaCronometro, 1000);
 } 
 comecaCronometro();    
 
 
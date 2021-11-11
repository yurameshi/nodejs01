let msgTempoInsuficiente = "Tempo insuficiente" //se tempo menor que padrao
let msgPratoPronto = "Prato pronto, bom apetite!!!" // ok
let msgPratoInexistente = "Prato inexistente" // nao listado
let msgComidaQueimou = "Comida queimou" // se tempo dobro do padrao
let msgPratoExplodiu = "Kabumm" // se tempo triplo do padrao

let Pipoca = 1
let Macarrão = 2
let Carne = 3
let Feijão = 4
let Brigadeiro = 5

function microondas (prato, tempo) {
    
    console.log("- Iniciando microondas com prato="+prato+" e tempo="+tempo);

    var tempoAdequado = 0;
    if(prato==1){tempoAdequado=10;}
    else if(prato==2){tempoAdequado=8;}
    else if(prato==3){tempoAdequado=15;}
    else if(prato==4){tempoAdequado=12;}
    else if(prato==5){tempoAdequado=8;}
    
    if(!tempoAdequado){console.log(msgPratoInexistente);}
    else if(tempo<tempoAdequado){console.log(msgTempoInsuficiente);}
    else if(tempo>=tempoAdequado*3){console.log(msgPratoExplodiu);}
    else if(tempo>=tempoAdequado*2){console.log(msgComidaQueimou);}

    console.log(msgPratoPronto);
}

//** TODOS OS TESTES */ 
//1 - Pipoca – 10 segundos (padrão);
microondas(Pipoca, 10);
//2 - Macarrão – 8 segundos (padrão);
microondas(Macarrão, 8);
//3 - Carne – 15 segundos (padrão);
microondas(Carne, 15);
//4 - Feijão – 12 segundos (padrão);
microondas(Feijão, 12);
//5 - Brigadeiro – 8 segundos (padrão); 
microondas(Brigadeiro, 1); //se tempo menor que padrao
microondas(Brigadeiro, 8); // ok
microondas(Brigadeiro, 16); // se tempo dobro do padrao
microondas(Brigadeiro, 32); // se tempo triplo do padrao

microondas(10, 20); // nao listado
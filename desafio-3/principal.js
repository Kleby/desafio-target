import { handleStatus } from "./promise-helpers.js";
import fatura from './faturamento.json' assert {type: 'json'};


function main (){
    let valores = fnFaturaValores(fatura);
    //menor valor 
    criarTabelaCompleta();

    fnSuperiorMedia(valores)

    criarTabelaMenorMaior('menor', valores);
    criarTabelaMenorMaior('maior', valores);
    criarTabelaMedia(valores);

}
function myRequest(valores, paramentro){
    switch(paramentro){
        case 'valor':
            fetch('./faturamento.json')
                .then(handleStatus)
                .then(valores = fatura.map( item => item.valor))
                .catch(console.log)
            break;
        
            case 'dia':
                fetch('./faturamento.json')
                    .then(handleStatus)
                    .then(valores = fatura.map( item => item.dia))
                    .catch(console.log)
                break;
    }
    return valores;
} 

function fnFaturaValores(){
    let paramentro = 'valor';
    let valores;
    let faturaValor = myRequest(valores, paramentro);
    return faturaValor;

} 


function fnFaturaDia(){
    let paramentro = 'dia';
    let dias;
    let faturaDia =myRequest(dias, paramentro);
    return faturaDia;
    
}

function fnMenorValor (arrValor){
    let menor = arrValor[0];
    let dia=[];
    let objMenorValor = {};
    for(let i = 0; i < arrValor.length ; i++){
        if (menor >= arrValor[i]){
            if(menor > arrValor[i]) while(dia.pop())
            menor = arrValor[i];
            dia.push(i+1);
            
        }
    }
    objMenorValor.valorMenor=menor;
    objMenorValor.diaMenor=dia.map(item => item);
    return objMenorValor;
}

function fnMaiorValor(arrValor){
    let maior = arrValor[0];
    let dia=[];
    let objMaiorValor = {};
    for(let i = 0; i < arrValor.length ; i++){
        if (maior <= arrValor[i]){
            if(maior < arrValor[i]) while(dia.length) dia.pop();
            maior = arrValor[i];
            dia.push(i+1);
        }
    }
    objMaiorValor.valorMaior=maior;
    objMaiorValor.diaMaior = dia;
    // console.log(objMaiorValor.diaMaior)
    return objMaiorValor;
}

function fnMediaValor(arrValor){
    let soma = 0;
    let media;
    for(let i = 0; i < arrValor.length ; i++){
        soma+=arrValor[i];
    }
    return media = soma / arrValor.length;
}

function fnSuperiorMedia(arrValor){
    let media = fnMediaValor(arrValor);
    let objSuperior = []
    for(let i = 0; i < arrValor.length ; i++){
        if(arrValor[i] > media){
            objSuperior.push({'dia': i+1,
                            'valor':arrValor[i]});
        }
    }
   return objSuperior;
}


function criarTabelaMenorMaior(tableRow, arrValor){
    let tdValor = document.createElement('td');
    let tdDia = document.createElement('td');
    let idValor;
    switch(tableRow){
        case 'menor':
            idValor = document.getElementById("tr-menor-valor");
            //cria a cedula de dia na tabela
            idValor.appendChild(tdDia);
            tdDia.innerHTML = fnMenorValor(arrValor).diaMenor;
            //Criar a cédula de Valor na tabela
            idValor.appendChild(tdValor);
            tdValor.innerHTML = fnMenorValor(arrValor).valorMenor;
            break;
        
        case 'maior':
            idValor = document.getElementById("tr-maior-valor");
             //cria a cedula de dia na tabela
             idValor.appendChild(tdDia);
             tdDia.innerHTML = fnMaiorValor(arrValor).diaMaior;
             //Criar a cédula de Valor na tabela
            idValor.appendChild(tdValor);
            tdValor.innerHTML = fnMaiorValor(arrValor).valorMaior;
            break;
    }
}

function criarTabelaCompleta(){
    let tabelaCompleta = document.getElementById('tabela-completa');
    let tr1;
    let tr2;
    let dias = fnFaturaDia();
    let valores = fnFaturaValores();
    let tdDia;
    let tdValor;


    for(let i = 0 ; i < dias.length ; i++){
        tdDia = document.createElement('td');
        tdValor = document.createElement('td');

        if((i) % 7 === 0){
            let thDia = document.createElement('th');
            let thValor = document.createElement('th');

            tr1 = document.createElement('tr');
            tr2 = document.createElement('tr');
            tr1.setAttribute('class', 'dia');
            tr2.setAttribute('class', 'valor');

            thDia.innerHTML = 'Dia';
            thValor.innerHTML = 'Valor';  
            tr1.appendChild(thDia)   
            tr2.appendChild(thValor)
            tabelaCompleta.appendChild(tr1)   
            tabelaCompleta.appendChild(tr2)   
        }
        tdDia.innerHTML = dias[i];
        tr1.appendChild(tdDia)
        tdValor.innerHTML = valores[i];
        tr2.appendChild(tdValor)
        
    } 

}
function criarTabelaMedia(arrValor){
    let tabela = document.getElementById("tabela-superior");
    let arrSuperiorMedia = fnSuperiorMedia(arrValor);
    let diaSuperior=(arrSuperiorMedia.map(item => item.dia))
    let valorSuperior = arrSuperiorMedia.map(item => item.valor)

    let tdDia;
    let tdValor;
    let tr;
    
    for(let i = 0 ; i < arrSuperiorMedia.length ; i++){
        tr = document.createElement('tr');
        tdDia = document.createElement('td');
        tdValor = document.createElement('td');

        tdDia.innerHTML = diaSuperior[i];
        tdValor.innerHTML = valorSuperior[i];

        tr.appendChild(tdDia);
        tr.appendChild(tdValor);
        tabela.appendChild(tr);
    }

}
main();

